import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { RequestBody } from '@/types/auth';
import { prisma } from '@/lib/db';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
	session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 7 },
	providers: [
		CredentialsProvider({
			credentials: { name: {}, email: {}, password: {} },
			authorize: async credentials => {
				const { email, password } = credentials as RequestBody;

				const user = await prisma.user.findUnique({ where: { email } });
				if (!user) throw new Error("user doesn't exist");

				const isValid = await compare(password, user.password);
				if (!isValid) throw new Error('invalid credentials');

				const { password: storedPassword, ...curUser } = user;
				return { ...curUser };
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
	],
	pages: { signIn: '/auth/login', newUser: '/auth/register' },
	callbacks: {
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.id
				}
			};
		},
		jwt: ({ token, user }) => {
			if (user) {
				const u = user as unknown as any;
				return {
					...token,
					id: u.id
				};
			}
			return token;
		}
	}
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

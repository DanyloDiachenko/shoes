import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import { prisma } from '@/lib/db';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/lib/regex';
import { RequestBody } from '@/types/auth';

export async function POST(req: NextRequest) {
	const body: RequestBody = await req.json();

	for (const key in body) {
		const input = key as keyof RequestBody;
		if (input === 'email') {
			const isValidEmail = EMAIL_REGEX.test(body.email);
			if (!isValidEmail) {
				return new NextResponse(JSON.stringify(null), {
					status: 422,
					statusText: 'email is not valid'
				});
			}
		}
		if (input === 'password') {
			const isValidPassword = PASSWORD_REGEX.test(body.password);
			if (!isValidPassword) {
				return new NextResponse(JSON.stringify(null), {
					status: 422,
					statusText: 'minimum 3 characters with 1 number'
				});
			}
		}
	}

	const user = await prisma.user.findUnique({ where: { email: body.email } });

	if (!user) {
		return new NextResponse(JSON.stringify(null), {
			status: 404,
			statusText: 'user not found'
		});
	}

	const validatePassword = await compare(body.password, user.password);
	if (!validatePassword)
		return new NextResponse(JSON.stringify(null), {
			status: 401,
			statusText: 'unauthorized'
		});

	const { password, ...currentUser } = user;
	return new NextResponse(JSON.stringify(currentUser), {
		status: 200,
		statusText: 'signin success'
	});
}

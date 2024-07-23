import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../[...nextauth]/route';
import { prisma } from '@/lib/db';
import { compare, hash } from 'bcrypt';

export async function PATCH(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return new NextResponse(JSON.stringify(null), {
			status: 401,
			statusText: 'Not authenticated!'
		});
	}

	const userEmail = session.user.email;
	const { oldPassword, newPassword } = await req.json();

	const user = await prisma.user.findUnique({ where: { email: userEmail } });

	if (!user) {
		return new NextResponse(JSON.stringify(null), {
			status: 404,
			statusText: 'User not found!'
		});
	}

	const verifyPassword = await compare(oldPassword, user.password);

	if (!verifyPassword) {
		return new NextResponse(JSON.stringify(null), {
			status: 403,
			statusText: 'Action not permitted!'
		});
	}

	const hashNewPassword = await hash(newPassword, 10);

	const updateUser = await prisma.user.update({
		where: { email: userEmail },
		data: { password: hashNewPassword }
	});

	console.log(updateUser);
}

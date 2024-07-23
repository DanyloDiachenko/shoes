import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
	return 'get all orders';
}

export async function POST(req: NextRequest, res: NextResponse) {
	return 'create order';
}

export async function DELETE(req: NextRequest, res: NextResponse) {
	return 'delete order';
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const currencyCookie = req.cookies.get("currency");

    if (!currencyCookie) {
        const response = NextResponse.next();

        response.cookies.set({
            name: "currency",
            value: "uah",
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/products/:path*"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const currencyCookie = req.cookies.get("currency");
    console.log("Existing currency cookie:", currencyCookie);

    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);

    if (!currencyCookie) {
        const response = NextResponse.next();

        response.cookies.set({
            name: "currency",
            value: "uah",
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: new Date().setTime(
                new Date().getTime() +
                    Number(
                        process.env.NEXT_PUBLIC_TOKEN_EXPIRES_IN_SECONDS ||
                            31536000
                    ) *
                        1000
            ),
        });

        console.log("New cookie set:", response.cookies.get("currency"));

        return response;
    }

    return NextResponse.next({ headers });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

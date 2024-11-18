import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const currencyCookie = req.cookies.get("currency");
    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);

    if (!currencyCookie) {
        const response = NextResponse.next();

        response.cookies.set({
            name: "currency",
            value: "uah",
            path: "/",
            expires: new Date().setTime(
                new Date().getTime() +
                    Number(
                        process.env.NEXT_PUBLIC_TOKEN_EXPIRES_IN_SECONDS ||
                            31536000
                    ) *
                        1000
            ),
        });

        return response;
    }

    return NextResponse.next({ headers });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

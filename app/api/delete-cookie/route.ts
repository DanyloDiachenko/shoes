import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.next();

    // Удаляем cookie, устанавливая истекший срок действия
    response.cookies.set({
        name: "token",
        value: "",
        expires: new Date(0), // Устанавливаем истекший срок действия
    });

    return response;
}

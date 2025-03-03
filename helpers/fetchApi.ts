import { getCookie } from "@/helpers/getCookie";

interface FetchOptions {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: unknown;
    isAuthRequired?: boolean;
}

export const fetchApi = async <T>({
    endpoint,
    method,
    body,
    isAuthRequired,
}: FetchOptions): Promise<T> => {
    const headers: Record<string, string> = {
        accept: "text/plain",
        "Content-Type": "application/json",
    };

    if (isAuthRequired) {
        const token = await getCookie("token");
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        }
    );

    return response.json();
};

declare namespace NodeJS {
	export interface ProcessEnv {
		POSTGRES_URL: string;
		NEXTAUTH_URL: string;
		NEXTAUTH_SECRET: string;
		GOOGLE_ID: string;
		GOOGLE_SECRET: string;
	}
}

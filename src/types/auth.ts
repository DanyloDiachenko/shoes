export type RequestBody = { name: string; email: string; password: string };

type UserAuth = {
	id: number;
	name: string;
	email: string;
	image?: string;
};

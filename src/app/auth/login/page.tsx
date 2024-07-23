import { getServerSession } from 'next-auth';
import { Login } from '@/components/auth/login';
import { AuthComponent } from '@/components/auth/auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Sign-in | sneakers shop',
	description: 'Sneakers shop login page.'
};

const LoginPage = async () => {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect('/');
	}

	return (
		<AuthComponent>
			<Login />
		</AuthComponent>
	);
};

export default LoginPage;

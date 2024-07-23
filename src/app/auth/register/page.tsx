import { Register } from '@/components/auth/register';
import { AuthComponent } from '@/components/auth/auth';

export const metadata = {
	title: 'Sign-up | sneakers shop',
	description: 'Sneakers shop signup page.'
};

const RegisterPage = () => {
	return (
		<AuthComponent>
			<Register />
		</AuthComponent>
	);
};

export default RegisterPage;

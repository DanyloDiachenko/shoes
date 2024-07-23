import { signIn, useSession } from 'next-auth/react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { cm } from '@/lib/class-merger';
import { RequestBody } from '@/types/auth';

export type SubmitHandler = (
	e: FormEvent,
	userInputs: RequestBody,
	validateForm: () => boolean,
	pageType: 'login' | 'register'
) => void;

type AuthWrapperProps = {
	className?: string;
	children: (
		handleSubmit: SubmitHandler,
		isSubmitting: boolean,
		serverErrMsg?: string
	) => ReactNode | ReactNode;
};

const registerUser = async (userInputs: RequestBody) => {
	const res = await fetch(`/api/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userInputs)
	});

	const data = await res.json();
	if (!res.ok) throw new Error(res.statusText || 'Something went wrong!');
	return data;
};

export const AuthWrapper = ({ children, className = '' }: AuthWrapperProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [serverErrMsg, setServerErrMsg] = useState('');
	const { status } = useSession();

	const callbackUrl = searchParams.get('callbackUrl') ?? '/';

	useEffect(() => {
		if (status === 'authenticated') router.replace(callbackUrl);
	}, [status, router, callbackUrl]);

	const handleSubmit: SubmitHandler = async (e, userInputs, validateForm, pageType) => {
		e.preventDefault();

		setIsSubmitting(true);
		const formIsValid = validateForm();
		if (!formIsValid) {
			setIsSubmitting(false);
			return;
		}

		try {
			setServerErrMsg('');
			if (pageType === 'register') {
				await registerUser(userInputs);
			}
			const result = await signIn('credentials', {
				redirect: false,
				callbackUrl,
				email: userInputs.email,
				password: userInputs.password
			}).finally(() => setIsSubmitting(false));
			if (result?.error) setServerErrMsg(result.error);
		} catch (error) {
			if (error instanceof Error) setServerErrMsg(error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			className={cm([
				'grid grid-rows-[14rem,12rem,auto,10rem] justify-items-center p-4 m-8',
				'shadow-lg rounded-3xl',
				'lg:shadow-none lg:rounded-none',
				className
			])}>
			<div className='space-y-8 text-center mt-4'>
				<h2 className='text-3xl lg:text-4xl font-bold uppercase text-Very_dark_blue'>
					hey there!
				</h2>
				<p className='text-2xl tracking-wide text-Dark_grayish_blue'>
					welcome to
					<Button
						href={'/'}
						className='inline mx-1 text-2xl font-bold uppercase rounded text-Orange'>
						sneakers
					</Button>
					the best selling sneaker shop in the world
				</p>
			</div>

			{typeof children === 'function'
				? children(handleSubmit, isSubmitting, serverErrMsg)
				: children}
		</section>
	);
};

'use client';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { AuthWrapper } from './auth-wrapper';
import { EmailIcon, LockIcon, SpinnerIcon, UserIcon } from '../icons';
import { useFormInputs, InputName } from '@/hooks/use-form-inputs';
import { GoogleButton } from './google-btn';
import { SwitchForm } from './switch-form';
import { cm } from '@/lib/class-merger';
import { ServerErrorMsg } from './server-error-msg';
import { RequestBody } from '@/types/auth';

export const Register = () => {
	const { inputForm, handleInputChange, validateForm } = useFormInputs([
		'name',
		'email',
		'password'
	]);

	const inputField = inputForm.reduce(
		(
			inputObj: Record<
				InputName,
				{ id: string; value: string; isValid: boolean; errorMsg: string }
			>,
			curInput
		) => {
			const id = curInput.id;
			const value = curInput.value;
			const isValid = curInput.isValid;
			const errorMsg = curInput.errorMsg;
			inputObj[id] = { id, value, isValid, errorMsg };
			return inputObj;
		},
		{
			name: { id: '', value: '', isValid: false, errorMsg: '' },
			email: { id: '', value: '', isValid: false, errorMsg: '' },
			password: { id: '', value: '', isValid: false, errorMsg: '' }
		}
	);

	const {
		id: nameId,
		value: enteredName,
		isValid: nameIsValid,
		errorMsg: nameErrMsg
	} = inputField.name;

	const {
		id: emailId,
		value: enteredEmail,
		isValid: emailIsValid,
		errorMsg: emailErrMsg
	} = inputField.email;

	const {
		id: passwordId,
		value: enteredPassword,
		isValid: passwordIsValid,
		errorMsg: passwordErrMsg
	} = inputField.password;

	const nameHasError = !nameIsValid && nameErrMsg;
	const emailHasError = !emailIsValid && emailErrMsg;
	const passwordHasError = !passwordIsValid && passwordErrMsg;

	const userInputs: RequestBody = {
		name: enteredName,
		email: enteredEmail,
		password: enteredPassword
	};

	return (
		<AuthWrapper>
			{(handleSubmit, isSubmitting, serverErrMsg) => (
				<>
					<div className='space-y-4 text-center text-Dark_grayish_blue'>
						<h3 className='text-4xl font-bold capitalize'>create new account</h3>
						<p className='text-xl'>
							First time to our shop no worries, make your first account here
						</p>
					</div>

					<form
						onSubmit={e => handleSubmit(e, userInputs, validateForm, 'register')}
						className='grid w-11/12 max-w-2xl gap-16'>
						<div className='grid gap-16'>
							<fieldset className='relative'>
								{!nameIsValid && (
									<p className='absolute right-0 z-10 text-xl tracking-wide -top-12 text-rose-600'>
										{nameErrMsg}
									</p>
								)}

								<Input
									required
									type='text'
									id={nameId}
									name={nameId}
									variant={'auth'}
									placeholder='Name'
									value={enteredName}
									onChange={handleInputChange}
									wrapperStyle='relative flex items-center cursor-pointer'
									className={`${
										nameHasError ? 'ring-rose-500' : nameIsValid ? 'ring-green-500' : ''
									}`}>
									<span className='fake-placeholder'>Name</span>
									<span
										className={`absolute right-5 w-8 h-8 peer-focus-visible:fill-Orange ${
											nameHasError
												? 'fill-rose-500'
												: nameIsValid
												? 'fill-green-500'
												: 'fill-Grayish_blue'
										}`}>
										<UserIcon />
									</span>
								</Input>
							</fieldset>

							<fieldset className='relative'>
								{!emailIsValid && (
									<p className='absolute right-0 z-10 text-xl tracking-wide -top-12 text-rose-600'>
										{emailErrMsg}
									</p>
								)}

								<Input
									required
									id={emailId}
									name={emailId}
									value={enteredEmail}
									type='text'
									variant={'auth'}
									placeholder='Email'
									autoComplete={'email'}
									onChange={handleInputChange}
									wrapperStyle='relative flex items-center cursor-pointer'
									className={cm([
										emailHasError && 'ring-rose-500',
										emailIsValid && 'ring-green-500'
									])}>
									<span className='fake-placeholder'>Email</span>
									<span
										className={cm([
											'absolute right-5 w-8 h-8 fill-Grayish_blue peer-focus-visible:fill-Orange',
											emailHasError && 'fill-rose-500',
											emailIsValid && 'fill-green-500'
										])}>
										<EmailIcon />
									</span>
								</Input>
							</fieldset>

							<fieldset className='relative'>
								{!passwordIsValid && (
									<p className='absolute right-0 z-10 text-xl tracking-wide -top-12 text-rose-600'>
										{passwordErrMsg}
									</p>
								)}

								<Input
									required
									type='password'
									id={passwordId}
									variant={'auth'}
									name={passwordId}
									value={enteredPassword}
									placeholder={'Password'}
									onChange={handleInputChange}
									wrapperStyle='relative flex items-center cursor-pointer'
									className={cm([
										passwordHasError && 'ring-rose-500',
										passwordIsValid && 'ring-green-500'
									])}>
									<span className='fake-placeholder'>Password</span>
									<span
										className={cm([
											'absolute right-5 w-8 h-8 fill-Grayish_blue peer-focus-visible:fill-Orange',
											passwordHasError && 'fill-rose-500',
											passwordIsValid && 'fill-green-500'
										])}>
										<LockIcon />
									</span>
								</Input>
							</fieldset>
						</div>

						<fieldset className='relative flex flex-col gap-8'>
							<ServerErrorMsg message={serverErrMsg} transY='-translate-y-6' />

							<Button
								hasRipple
								type='submit'
								disabled={isSubmitting}
								variant={'secondary_orange'}
								onClick={() => validateForm()}
								className='mt-8 shadow'>
								<span>SIGN UP</span>
								{isSubmitting && (
									<SpinnerIcon className='absolute z-10 -translate-y-1/2 right-10 top-1/2 ' />
								)}
							</Button>

							{/* DIVIDER */}
							<div className='relative flex items-center justify-center gap-4 my-8 group'>
								<span className='relative w-full h-px bg-Orange/50'>&nbsp;</span>
								<span className='absolute p-8 text-xl font-bold bg-white rounded-full text-Dark_grayish_blue/75'>
									OR
								</span>
							</div>

							<GoogleButton />
						</fieldset>
					</form>

					<SwitchForm href='/auth/login' message='Actually I have an account' />
				</>
			)}
		</AuthWrapper>
	);
};

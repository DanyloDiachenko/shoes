'use client';
import { ChangeEventHandler, useState } from 'react';
import { NAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '@/lib/regex';

export type InputName = 'name' | 'email' | 'password';

type Input = { id: InputName; value: string; isValid: boolean; errorMsg: string };

const createInputs = (inputNames: InputName[]): Input[] => {
	return inputNames.map(inputName => ({
		id: inputName,
		value: '',
		isValid: false,
		errorMsg: ''
	}));
};

export const useFormInputs = (inputNames: InputName[]) => {
	const [inputForm, setInputForm] = useState(createInputs(inputNames));

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.target.value;
		const name = e.target.name as InputName;

		setInputForm(prevInputForm => {
			let errorMsg = '';
			let isValid = false;

			if (name === 'name') {
				isValid = NAME_REGEX.test(value);
				if (!isValid && value.length > 0) errorMsg = 'Spaces are not allowed';
			}

			if (name === 'email') {
				isValid = EMAIL_REGEX.test(value);
				if (!isValid && value.length > 0) errorMsg = 'Email is not valid';
			}

			if (name === 'password') {
				isValid = PASSWORD_REGEX.test(value);
				if (!isValid && value.length > 0)
					errorMsg = 'Min 3 letters, 1 number and no space';
			}

			return prevInputForm.map(input =>
				input.id !== name ? input : { ...input, value, isValid, errorMsg }
			);
		});
	};

	const validateForm = () => {
		const validateFormInputs = inputForm.map(input =>
			input.isValid ? input : { ...input, errorMsg: 'This field is required' }
		);

		setInputForm(validateFormInputs);
		return validateFormInputs.every(input => input.isValid);
	};

	return {
		inputForm,
		validateForm,
		handleInputChange
	};
};

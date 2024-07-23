import { useState, useEffect } from 'react';

export const useHydratedStore = <S, T>(
	store: (callback: (state: S) => unknown) => unknown,
	callback: (state: S) => T
) => {
	const result = store(callback) as T;
	const [state, setState] = useState<T>(result);

	useEffect(() => {
		setState(result);
	}, [result]);

	return state;
};

export const useHydratedState = <T>(value: T, initState: T) => {
	const [state, setState] = useState<T>(initState);

	useEffect(() => {
		setState(value);
	}, [value]);

	return state;
};

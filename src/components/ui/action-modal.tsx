import { MouseEventHandler, useRef } from 'react';

import { Card } from './card';
import { Button } from './button';
import { Overlay } from './overlay';

type ActionModalProps = {
	state: boolean;
	className?: string;
	variant: 'clear_cart' | 'delete_order';
	onCancel: MouseEventHandler<HTMLElement>;
	onConfirm: MouseEventHandler<HTMLElement>;
};

export const ActionModal = ({
	onCancel,
	onConfirm,
	state,
	className = '',
	variant
}: ActionModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	let headerText = '';
	let bodyText: string | JSX.Element = '';
	let confirmText = 'confirm';
	confirmText = 'delete';

	if (variant === 'clear_cart') {
		headerText = 'Clear my cart';
		bodyText = (
			<>
				You're about to <b className='text-red-500'>delete all</b> items in your cart, Are
				you sure ?
			</>
		);
	}

	if (variant === 'delete_order') {
		headerText = 'Delete this order';
		bodyText = (
			<>
				You're about to <b className='text-red-500'>delete</b> this currently active
				order, Are you sure ?
			</>
		);
	}

	return (
		<>
			<Overlay onClick={onCancel} className={`${state ? 'block' : 'hidden'}`} />
			<Card ref={modalRef} state={state} className={className} variant={'action_modal'}>
				<header className='pb-4 border-b-2 border-Very_light_grayish_blue'>
					<p className='text-3xl font-bold text-Dark_grayish_blue '>{headerText}</p>
				</header>

				<section>
					<h2 className='text-2xl text-center text-Dark_grayish_blue'>{bodyText}</h2>
				</section>

				<footer className='flex items-center justify-between mx-8 mt-auto mb-4'>
					<Button
						title='confirm action'
						variant={'danger'}
						modifier={'outline'}
						onClick={onConfirm}>
						<span>{confirmText}</span>
					</Button>
					<Button
						title='cancel action'
						variant={'default'}
						modifier={'outline'}
						onClick={onCancel}>
						<span>cancel</span>
					</Button>
				</footer>
			</Card>
		</>
	);
};

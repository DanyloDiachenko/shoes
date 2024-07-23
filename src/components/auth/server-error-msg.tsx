import { cm } from '@/lib/class-merger';

export const ServerErrorMsg = ({
	message,
	className,
	transY
}: {
	message?: string;
	className?: string;
	transY: string;
}) => {
	return (
		<small
			className={cm([
				'absolute left-1/2 -translate-x-1/2 w-full px-16',
				'text-xl text-red-500 font-semibold text-center tracking-wide capitalize',
				'transition-[opacity,transform]  duration-300 ease-in-out',
				message ? `${transY} opacity-100 visible` : '-translate-y-0 opacity-0 invisible',
				className
			])}>
			{message}
		</small>
	);
};

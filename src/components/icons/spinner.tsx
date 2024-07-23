import { cm } from '@/lib/class-merger';

type Props = {
	className?: string;
	children?: React.ReactNode;
};

export const SpinnerIcon = ({ className = '', children }: Props) => {
	return (
		<span
			aria-label='loading spinner'
			className={cm([
				'relative flex items-center justify-center gap-4',
				'after:absolute after:p-4 after:rounded-full after:border-4 after:border-Very_light_grayish_blue  after:border-l-Dark_grayish_blue after:animate-spin',
				className
			])}>
			{children}
		</span>
	);
};

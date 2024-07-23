import { RippleDimension } from './button';

type Props = { rippleColor?: string; rippleDimension: RippleDimension };

export const Ripple = ({ rippleColor, rippleDimension }: Props) => {
	const color = rippleColor ? rippleColor : 'bg-white';
	return (
		<div
			className={`absolute ${color} bg-opacity-75 rounded-full pointer-events-none animate-ripple`}
			style={{
				top: rippleDimension.y,
				left: rippleDimension.x,
				width: rippleDimension.size,
				height: rippleDimension.size
			}}
		/>
	);
};

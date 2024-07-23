type Props = { className?: string; children: React.ReactNode };

export const SectionWrapper = ({ children, className = '' }: Props) => {
	return (
		<section
			className={`${className} flex flex-col bg-Very_light_grayish_blue p-8 xl:p-12 gap-8 xl:gap-16 rounded-xl`}>
			{children}
		</section>
	);
};

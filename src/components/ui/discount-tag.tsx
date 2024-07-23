type Props = {
  discount: number;
  className?: string;
};

export const DiscountTag = ({ discount, className = '' }: Props) => {
  let amount = discount;
  if (discount < 1) {
    amount *= 100;
  }

  return (
    <span
      className={`${className} font-bold bg-Pale_orange text-Orange px-3 py-1 rounded-md text-2xl`}>
      {amount}%
    </span>
  );
};

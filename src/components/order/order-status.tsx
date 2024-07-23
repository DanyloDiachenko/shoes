import { SectionWrapper } from './section-wrapper';

export const OrderStatus = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center gap-8 xl:gap-16">
        <h3 className="text-3xl xl:text-4xl font-bold text-Very_dark_blue/80">Status</h3>
        <div className="space-x-2">
          <span className="px-4 py-2 text-lg bg-Orange/80 text-white rounded-md ">in process</span>
          <span className="text-2xl"> 🛒 </span>
          <span className="px-4 py-2 text-lg bg-green-500/80 text-white rounded-md ">
            to be shipped
          </span>
        </div>
      </div>

      <p className="grid gap-4 text-xl text-Dark_grayish_blue text-center xl:text-2xl">
        <span>Thank you for placing an order with</span>
        <b className="text-3xl uppercase text-Orange xl:text-4xl"> sneakers </b>
        <span>
          We are pleased to confirm that your order has been received and is being processed.
        </span>
        <span>
          An email with the shipping information and tracking number will be sent once your order
          has been shipped.
        </span>
      </p>
    </SectionWrapper>
  );
};

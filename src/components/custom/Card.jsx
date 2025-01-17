
import { Card } from "@/components/ui/card"; // Import necessary Shadcn components
import world from '@/assets/world.svg'
import visaWhite from '@/assets/visaWhite.svg'
import chip from '@/assets/chip.svg'
const VisaCard = ({cardData}) => {
  return (
    <Card 
    className="overflow-hidden relative bg-white/10 backdrop-blur-md text-white shadow-lg p-6 z-[1] rounded-2xl w-full">

      <img src={world} width={"100%"} className="left-0 absolute -bottom-16 z-[-1]" alt="" />
      
      {/* Card Brand */}
      <div className="mb-4">
        {/* <p className="text-xl font-semibold">
          {cardData.brand}
          </p> */}
          <img src={visaWhite} className="ml-auto " width={90} alt="visa logo" />
      </div>


      {/* Card Details */}
      <img src={chip} width={60} alt="" />
      <div className="mb-2">
        <p className="text-xl font-bold">**** **** **** {cardData.last4}</p>
      </div>

    <div className="flex gap-x-12">

      {/* Cardholder Name */}
      <div className="">
        <p className="text-sm ">Cardholder</p>
        <p className="text-lg font-medium">{cardData.cardholderName}</p>
      </div>
      {/* Expiry Date */}
      <div className="">
        <p className="text-sm ">Expiry Date</p>
        <p className="text-xl font-bold">
          {cardData.expiryMonth < 10 ? `0${cardData.expiryMonth}` : cardData.expiryMonth}/
          {cardData.expiryYear % 2000}
        </p>
      </div>

      {/* CVC */}
      <div className="">
        <p className="text-sm ">CVC</p>
        <p className="text-xl font-bold">{cardData.cvc}</p>
      </div>
    </div>

    </Card>
  );
};

export default VisaCard;

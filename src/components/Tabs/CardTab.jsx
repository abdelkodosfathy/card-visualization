import VisaCard from "@/components/custom/Card"
import CustomSelect  from '@/components/custom/Select'
import DataList from '@/components/custom/DataList'
import CardActionButton from '@/components/custom/CardActionButton'
import { useEffect, useState } from "react"
import { getCardData } from "@/services/cardService"
import { Circle } from "../custom/Circle"

const CardTab = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCardData();
        setCardData(data);
      } catch (error) {
        console.error("Error in fetching card data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className=" relative p-9 flex flex-col gap-5 mx-auto w-fit">
    <CustomSelect/>
    <Circle radius="12rem" deg="90" classes="top-1 -left-11"/>
    <Circle radius="15rem" deg="0" classes="top-48 -right-[74px]"/>
    <Circle radius="13rem" deg="0" classes="bottom-36 -left-[64px]"/>
    { cardData ?
    <>
      <VisaCard cardData={cardData}/> 
      <DataList cardData={cardData}/> 
    </> : 
    // just for loading state
    <>
    <div className="w-[27.3rem] z-[1] h-[15rem] rounded-2xl  bg-white/10 backdrop-blur-md"></div>
    <div className="w-[27.3rem] z-[1] h-[22rem] rounded-2xl  bg-white/10 backdrop-blur-md"></div>
    </>
    }
    <div className='flex gap-2 flex-col'>
      <CardActionButton name="Freeze card" color="blue"/>
      <CardActionButton name="Replace card" color="green"/>
      <CardActionButton name="Cancel card" color="red"/>
    </div>
  </div>
  )
}

export default CardTab





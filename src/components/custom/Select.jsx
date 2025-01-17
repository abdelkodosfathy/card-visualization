import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import visaBackgrounded from '@/assets/visaBackgrounded.svg'
import React from 'react'

const CustomSelect = () => {
  return (
    <Select
      value="JR"
    >
      <SelectTrigger style={{
        outline:"none",
        border:"none",
        "--tw-ring-offset-width":"0"
      }} className="bg-white/10 backdrop-blur-md text-white border-none w-full z-[1] shadow-lg">
        <SelectValue placeholder="payment"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="JR">
          <div className="flex items-center gap-2">

          <img 
            src={visaBackgrounded} 
            style={{height:"16px"}} 
            alt="visa icon"
            /> 
            <p>
            Jenny Rose
            </p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>

  )
}

export default CustomSelect
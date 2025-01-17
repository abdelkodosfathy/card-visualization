import React from 'react'
import Row from './Row'
import visaBackgrounded from '@/assets/visaBackgrounded.svg'
import StatusBadge from './Badge'

const DataList = ({cardData}) => {
  return (
    <div className='w-full flex-1 bg-white/10 backdrop-blur-md text-white shadow-lg p-6 z-[1] rounded-2xl'>
      <Row label={"Card number"}>**** **** **** {cardData.last4}</Row>
      <Row label={"CVV"}>***</Row>
      <Row label={"Expiration"}>
        {`${cardData.expiryMonth < 10 ? `0${cardData.expiryMonth}` : cardData.expiryMonth} / ${cardData.expiryYear}`}
      </Row>
      <Row label={"Brand"}>
        <div className="flex items-center gap-2">
          Visa
          <img 
            src={visaBackgrounded} 
            style={{height:"12px"}} 
            alt="visa icon"
          />
        </div>
      </Row>
      <Row label={"Status"}>
        <div className='w-fit'>
          <StatusBadge status={"Active"}/>
        </div>
      </Row>
      <Row label={"Cardholder"}>{cardData.cardholderName}</Row>
      <Row label={"Card type"}>Virtual</Row>
      <Row label={"Created at"}>Nov 15, 2023, 9:32 PM</Row>
      <Row label={"Billing address"}>221B Baker Street, London, NW1 6XE, UK</Row>
    </div>
  )
}

export default DataList

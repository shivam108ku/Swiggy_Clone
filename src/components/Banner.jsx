import React from 'react'

const Banner = ({ foodDelivery }) => {
  return (
    <div className="border mt-10 border-gray-300 px-10
     py-1 rounded-lg text-center
     text-gray-800 font-light text-sm hover:shadow-md 
     cursor-pointer transition">
      <div>
 
</div>
      <a target='_blank' href={foodDelivery?.action?.link} className="block">
        {foodDelivery?.text}
      </a>
    </div> 
  
  )
}

export default Banner
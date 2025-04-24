import React, { useState } from 'react'
import { FoodDelivery , CityDelivery } from '../utils/FoodData';
import Banner from './Banner';

const BannerCard = () => {

  const [visible , setVisible] = useState(11);

  const handleShowmore =()=>{
    setVisible(prev =>(prev + 10))
  }
     
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-4 my-4 gap-5 w-[60%] mx-auto'>
    


    {   
        FoodDelivery.slice(0 , visible).map((foodDelivery, index) => (
       
          <Banner key={index} foodDelivery={foodDelivery} />
        ))  
    }

    
  {
    visible < FoodDelivery.length && (
      <div className="text-center mt-6">
          <button 
            onClick={handleShowmore}
            className="px-6 py-3 mt-4 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
    )
  }
  </div>
)
}

export default BannerCard
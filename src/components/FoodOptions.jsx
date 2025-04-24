import React from 'react'
import { imageGridCards } from '../utils/FoodData';
import FoodCard from './FoodCard';

const FoodOptions = () => {
  return (
    <div className='w-[80%] gap-3 container mx-auto mt-5 flex flex-wrap'>
        {
            imageGridCards.map((foodData)=>{
              return <FoodCard key={foodData.id} foodData={foodData} />
            })
        }
    </div>
  )
}

export default FoodOptions
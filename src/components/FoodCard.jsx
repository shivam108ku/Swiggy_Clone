import React from 'react'

const FoodCard = ( {foodData} ) => {
  return (
    <div className=''>  
     <a href={foodData?.action?.link}>      
        <img 
        className='h-46 w-40 object-cover '
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`} alt="" />
    </a>
    </div>
  )
}

export default FoodCard
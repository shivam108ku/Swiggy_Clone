import React from 'react'

const Header = () => {
  return (
     <header className='bg-[#FF5200] font-arial'>
        <div className='flex py-8 justify-between container mx-auto items-center'>
            <img 
            className='w-40 h-12'
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
            <div className='text-white 
            flex justify-between gap-15 items-center
            font-arial text-base font-bold '>
               <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
               <a target='_blank' href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
               <a className='border rounded-xl border-white py-3 px-4 ' target='_blank' href="">Get the App</a>
               <a className='border rounded-2xl bg-black  border-white/30 py-3 px-8 ' target='_blank' href="">Sign in</a>

            </div>

        </div>

       {/*  Mid part */}
        <div className='pt-6 pb-18 relative'>

         <img 
         className='h-110 w-60 absolute top-0 left-0'
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
         <img 
         className='h-110 w-60 absolute top-0 right-0'
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

          
         <div className='max-w-[70%] flex justify-center gap-5 mt-5 container mx-auto'>
            <input 
            className='bg-white font-bold outline-none rounded-xl px-4 py-4 text-base ml-5 w-[25%]'
             placeholder='Delhi, India' type="text"></input>
            <input 
            className='bg-white font-bold  outline-none rounded-xl px-4 text-base py-4 w-[45%]'
            placeholder='Search for more items and restaurants' type="text"></input>
         </div>
        </div>

        {/* Last Part */}
        <div className='max-w-[80%]  flex container mx-auto'>
         <a href="https://www.swiggy.com/restaurants">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="" />
         </a>
         <a href="https://www.swiggy.com/genie">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/30/c1a4c945-fdf5-4418-af0b-4fb179b1e108_Genie2BU.png" alt="" />
         </a>
        </div>

     </header>
  )
}

export default Header;
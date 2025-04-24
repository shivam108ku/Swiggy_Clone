import React, { useEffect, useState } from 'react'
import RestaurantCards from './RestaurantCards'
import SmallCardData from './SmallCardData';

const Restaurants = () => {

    const [restdata , setRestdata] = useState({ smallCards: [], restaurantData: [] });
    
    useEffect(()=>{
        async function fetchData(){
            const proxySerevr = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi =  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4425&lng=81.8517&carousel=true&third_party_vendor=1"
            const response = await fetch(proxySerevr + swiggyApi);
            const data = await response.json();
            
            const smallCards = data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
            const restaurantData = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestdata({smallCards, restaurantData});
            console.log(restdata);
        }
        fetchData();
    },[])
console.log(restdata);

  return (
    <div>
        {
            restdata.smallCards.map((info)=>(
                <SmallCardData data={info} />
            ))
        }
    </div>
  )
}

export default Restaurants;
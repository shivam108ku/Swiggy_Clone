import React from 'react'

const SmallCardData = ({data}) => {
  let url = "https://media-assets.swiggy.com/swiggy/image/upload/";
  return (
    <div>

      {
        <img src={url+data.imageId} alt="" />
      }
    </div>
  )
}

export default SmallCardData
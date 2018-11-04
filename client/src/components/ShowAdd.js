import React from 'react'

const ShowAdd = ({getAddImageUrl}) => {
  return (
    <div>
      <p className="ProductItem--image-title">But first, a word from our sponsors:</p>
      <img className="ProductItem--image-pic" src={`http://localhost:3000/ads/?r=${getAddImageUrl()}`} alt={"Ad"} />
    </div>
  )
}

export default ShowAdd

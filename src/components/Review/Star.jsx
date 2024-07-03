"use client"
import React from 'react'
import ReactStars from "react-rating-stars-component";
export default function Star({value}) {
  return (
    <>
     <ReactStars
                  count={5}
                  value={value}
                  
                  
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
    </>
  )
}

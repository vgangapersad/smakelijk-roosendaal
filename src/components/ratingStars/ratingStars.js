import * as React from "react";
import { IoStar } from "react-icons/io5";
import "./ratingStars.css";

const RatingStars = ({amount}) => {
  let tempArr = [];
  for (let i = 0; i < amount; i++) {
      tempArr.push(i);
  }  
  return(
  <div className="ratingstars-rating">
    <p>{tempArr.map((e)=>{
        return(
            <IoStar className="star-icon"/>
        )
    })}</p>
  </div>
)
}

export default RatingStars

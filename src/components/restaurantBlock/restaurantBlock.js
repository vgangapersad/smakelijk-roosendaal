import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "./restaurantBlock.css";

const RestaurantBlock = ({res, slug}) => {
  const featuredImage = getImage(res.headerRestaurant.featuredPicture.localFile);

  return(
  <div className="restaurant-block">
    <Link to={`${slug}`}>
    <GatsbyImage alt={res.headerRestaurant.featuredPicture.altText} image={featuredImage}/>
    <h3>{res.headerRestaurant.name}</h3>
    </Link>
  </div>
)
}

export default RestaurantBlock

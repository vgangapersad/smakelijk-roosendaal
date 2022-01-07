import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "./featuredRestaurant.css";

const FeaturedRestaurant = ({res}) => {
  const featuredImage = getImage(res.ACFRestaurantFields.headerRestaurant.featuredPicture.localFile);

  return(
  <div className="featured-restaurants-item">
    <Link to={`restaurants/${res.slug}`}>
    <GatsbyImage alt="" image={featuredImage}/>
    <h3>{res.ACFRestaurantFields.headerRestaurant.name}</h3>
    </Link>
  </div>
)
}

export default FeaturedRestaurant

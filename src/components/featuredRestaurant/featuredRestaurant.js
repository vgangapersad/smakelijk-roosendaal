import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { IoMenu, IoClose } from "react-icons/io5";
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";
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

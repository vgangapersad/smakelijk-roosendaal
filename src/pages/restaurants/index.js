import React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from "../../components/layout";
import { getImage,GatsbyImage } from 'gatsby-plugin-image';
import "./restaurants.css"
import RestaurantBlock from '../../components/restaurantBlock/restaurantBlock';

const RestaurantsPage = ({data: {wpPage: {ACFRestaurantsPageFields: resPage}, allWpRestaurant: {edges : res}}}) => {
  const resBannerImg = getImage(resPage.headerRestaurants.bannerPicture.localFile)
  return (
    <Layout pageTitle="Smakelijk Roosendaal">
      <div className="res-body">
      <div className="res-header">
      <div className="res-img-container">
       <GatsbyImage alt={resPage.headerRestaurants.bannerPicture.altText} image={resBannerImg}/>
      </div>
      <div className="res-title-container">
        <h1>{resPage.headerRestaurants.title}</h1>
        <p>{resPage.headerRestaurants.description}</p>
        <div className="res-socials-container">
          <button><Link to={resPage.socialMediaLinks.instagramLink} target="_blank">Instagram</Link></button>
          <button><Link to={resPage.socialMediaLinks.facebookLink} target="_blank">Facebook</Link></button>
        </div>
      </div>
      </div>
      <div className="res-resdetail-container">
         {res.map((e)=>{
           return(
           <RestaurantBlock res={e.node.ACFRestaurantFields} slug={e.node.slug} key={e.node.id}/>
         )})}           
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "restaurants"}) {
    ACFRestaurantsPageFields {
      headerRestaurants {
        title
        description
        bannerPicture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      socialMediaLinks {
        facebookLink
        instagramLink
      }
    }
  }
  allWpRestaurant {
    edges {
      node {
        ACFRestaurantFields {
          headerRestaurant {
            name
            featuredPicture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)
                }
              }
            }
          }
          rating {
            ambianceRating
            foodRating
            priceQualityRating
            serviceRating
          }
        }
        slug
        id
      }
    }
  }
}
`

export default RestaurantsPage

import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoRestaurant, IoHappyOutline, IoSparkles, IoCash } from "react-icons/io5";
import "./restaurantDetail.css";
import RatingStars from '../../components/ratingStars/ratingStars';

const Restaurant = ({data: {wpRestaurant : res}}) => {
  let address = res.ACFRestaurantFields.contactInformation.location;
  let mapsLink = `https://www.google.com/maps/place/${address.replace(" ","+").replace(",","+")}`;
  const resDetailBannerImg = getImage(res.ACFRestaurantFields.headerRestaurant.featuredPicture.localFile);
  const detailFeatureImg1 = getImage(res.ACFRestaurantFields.gallery.picture1.localFile);
  const detailFeatureImg2 = getImage(res.ACFRestaurantFields.gallery.picture2.localFile);
  const detailFeatureImg3 = getImage(res.ACFRestaurantFields.gallery.picture3.localFile);

    return (
        <Layout pageTitle="Smakelijk Roosendaal">
        <div className="resdetail-body">
        <div className="resdetail-primary-container">
          <h1>{res.ACFRestaurantFields.headerRestaurant.name}</h1>
          <div className="resdetail-btn-group">
            <button><a href={res.ACFRestaurantFields.contactInformation.websiteLink} target="_blank" rel="noreferrer">Website</a></button>
            <button><a href={res.ACFRestaurantFields.contactInformation.menuLink} target="_blank" rel="noreferrer">Menu</a></button>
            <button><a href={res.ACFRestaurantFields.contactInformation.orderOnlineLink} target="_blank" rel="noreferrer">Online bestellen</a></button>
            <button><a href={`tel:${res.ACFRestaurantFields.contactInformation.phoneNumber}`} target="_blank" rel="noreferrer">Bellen</a></button>
            <button><a href={`mailto:${res.ACFRestaurantFields.contactInformation.email}`} target="_blank" rel="noreferrer">Email</a></button>
            <button className="address-btn"><a href={mapsLink} target="_blank" rel="noreferrer">{res.ACFRestaurantFields.contactInformation.location}</a></button>
          </div>
        </div>
        <div className="resdetail-secondary-container">
          <div className="resdetail-bannerimg-container">
          <GatsbyImage alt={res.ACFRestaurantFields.headerRestaurant.featuredPicture.altText} image={resDetailBannerImg}/>
          </div>
          <div className="resdetail-rating-container">
          <div>
            <h2>Beoordeling</h2>
            <p>{res.ACFRestaurantFields.rating.review}</p>
          </div>
            <div className="resdetail-rating-item">
              <p className="resdetail-rating-title"><IoRestaurant/> Eten</p>
              <RatingStars amount={res.ACFRestaurantFields.rating.foodRating}/>
            </div>
            <div className="resdetail-rating-item">
              <p className="resdetail-rating-title"><IoHappyOutline/> Service</p>
              <RatingStars amount={res.ACFRestaurantFields.rating.serviceRating}/>
            </div>
            <div className="resdetail-rating-item">
              <p className="resdetail-rating-title"><IoSparkles/> Sfeer</p>
              <RatingStars amount={res.ACFRestaurantFields.rating.ambianceRating}/>
            </div>
            <div className="resdetail-rating-item">
              <p className="resdetail-rating-title"><IoCash/> Prijs/Kwaliteit</p>
              <RatingStars amount={res.ACFRestaurantFields.rating.priceQualityRating}/>
            </div>
          </div>
        </div>
        <div className="resdetail-tertiary-container">
          <div className="resdetail-feature-img-box">
            <GatsbyImage alt={res.ACFRestaurantFields.gallery.picture1.altText} image={detailFeatureImg1}/>
          </div>
          <div className="resdetail-feature-img-box">
            <GatsbyImage alt={res.ACFRestaurantFields.gallery.picture2.altText} image={detailFeatureImg2}/>
          </div>
          <div className="resdetail-feature-img-box">
            <GatsbyImage alt={res.ACFRestaurantFields.gallery.picture3.altText} image={detailFeatureImg3}/>
          </div>
        </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
query ($slug: String){
    wpRestaurant(slug: { eq: $slug }) {
      ACFRestaurantFields {
        contactInformation {
          email
          location
          menuLink
          orderOnlineLink
          phoneNumber
          websiteLink
        }
        rating {
          ambianceRating
          foodRating
          priceQualityRating
          serviceRating
          review
          reviewer {
            email
            name
          }
        }
        headerRestaurant {
          name
          description
          featuredPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
            altText
          }
        }
        gallery {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
      }
      cuisines {
        nodes {
          name
        }
      }
    }
  }
`

export default Restaurant

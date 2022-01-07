import * as React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./index.css";
import FeaturedRestaurant from "../components/featuredRestaurant/featuredRestaurant";

const IndexPage = ({data: {wpPage: {ACFHomePageFields: fields}}}) => {
  const bannerImage = getImage(fields.headerHome.bannerPicture.localFile);
  return(
    <Layout pageTitle="Smakelijk Roosendaal">
      <div className="home-header">
        <div className="home-welcome-text">
          <h1>{fields.headerHome.title}</h1>
          <p>{fields.headerHome.description}</p>
          <button><a href={fields.callToAction.link} target="_blank" rel="noreferrer">{fields.callToAction.linkText}</a></button>
        </div>
        <div>
          <div className="home-header-img-container">
          <GatsbyImage alt={fields.headerHome.bannerPicture.altText} image={bannerImage} className="home-banner-image"/>
          </div>
        </div>
      </div>
      <div className="featured-restaurants-container">
        <h2>{fields.featuredRestaurants.title}</h2>
        <p>{fields.featuredRestaurants.description}</p>
        <div className="featured-restaurants">
          {fields.featuredRestaurants.restaurants.map((e) =>{
            return(
              <div key={e.id}>
                <FeaturedRestaurant res={e}/>
              </div>
          )})}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      ACFHomePageFields {
        callToAction {
          link
          linkText
        }
        headerHome {
          title
          description
          bannerPicture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
        featuredRestaurants {
          title
          description
          restaurants {
            ... on WpRestaurant {
              id
              slug
              ACFRestaurantFields {
                headerRestaurant {
                  name
                  featuredPicture {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}
`
export default IndexPage

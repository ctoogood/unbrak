import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo1notext.png"
import rightArrow from "../images/right-arrow.svg"
import leftArrow from "../images/left-arrow.svg"
import ItemsCarousel from "react-items-carousel"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import "./templates.scss"

const ProductView = ({ data: { product } }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 60
  return (
    <Layout>
      <SEO title={product.title} />
      <div className="productView__main">
        <section className="productView__image">
          <img className="productView__bgLogo" src={logo} alt="logo" />
          <div
            style={{ padding: `0 ${chevronWidth}px` }}
            className="productView__productImage"
          >
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              gutter={20}
              leftChevron={
                <img
                  src={leftArrow}
                  style={{ backgroundColor: `white` }}
                  alt="arrow"
                />
              }
              rightChevron={
                <img
                  src={rightArrow}
                  style={{ backgroundColor: `white` }}
                  alt="arrow"
                />
              }
              outsideChevron
              showSlither={false}
              chevronWidth={chevronWidth}
            >
              {product.images.map(image => (
                <Img fluid={image.localFile.childImageSharp.fluid} />
              ))}
            </ItemsCarousel>
          </div>
        </section>
        <section className="productView__desc">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="productView__variants">
            {product.options.map(variant => (
              <div className="productView__dropdown">
                <h4>{variant.name}</h4>
                <Dropdown
                  options={variant.values}
                  // onChange={this._onSelect}
                  value={variant.values[0]}
                  placeholder="Select an option"
                />
              </div>
            ))}
          </div>
          <h2>£{product.priceRange.maxVariantPrice.amount}</h2>
          <div className="productView__cartButtonContainer">
            <button className="productView__cartButton">Add to Cart</button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ProductView

export const query = graphql`
  query ProductQuery($handle: String!) {
    product: shopifyProduct(handle: { eq: $handle }) {
      description
      handle
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      productType
      title
      options {
        name
        values
      }
    }
  }
`

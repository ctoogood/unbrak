import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import "./pages.scss"

const Equipment = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "daan-weijers-pSaEMIiUO84-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allShopifyProduct(filter: { productType: { eq: "Equipment" } }) {
        edges {
          node {
            id
            productType
            handle
            title
            images {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
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
          }
        }
      }
    }
  `)
  return (
    <Layout path={props.location}>
      <SEO title="Equipment" />
      <section className="page__main">
        <section className="page__title">
          <Img
            className="page__titleBackground"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
          <h1>Equipment</h1>
        </section>
        <section className="page__products">
          {data.allShopifyProduct.edges.map(product => (
            <Product product={product} key={product.node.id} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Equipment

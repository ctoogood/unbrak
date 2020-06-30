import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import "./pages.scss"

const Womens = props => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(filter: { productType: { eq: "Womens" } }) {
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
      <SEO title="Womens" />
      <section className="page__main">
        <section className="page__title">
          <h1>Womens Clothing</h1>
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

export default Womens

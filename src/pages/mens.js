import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import "./pages.scss"

const Mens = props => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(filter: { productType: { eq: "Mens" } }) {
        edges {
          node {
            id
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
      <SEO title="Mens" />
      <section className="page__main">
        <section className="page__title">
          <h1>Mens Clothing</h1>
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

export default Mens

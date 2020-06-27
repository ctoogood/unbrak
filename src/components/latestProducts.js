import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "../components/product"
import "./components.scss"

const LatestProducts = props => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(
        filter: { productType: { eq: "Mens" } }
        limit: 3
        sort: { fields: publishedAt, order: DESC }
      ) {
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
    <section className="latestProducts__main">
      <section className="latestProducts__title">
        <h1>Latest Products</h1>
      </section>
      <section className="latestProducts__products">
        {data.allShopifyProduct.edges.map(product => (
          <Product product={product} key={product.node.id} />
        ))}
      </section>
    </section>
  )
}

export default LatestProducts

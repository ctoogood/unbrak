import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./components.scss"

const Product = ({ product }) => {
  const price = parseFloat(product.node.priceRange.maxVariantPrice.amount)
  return (
    <>
      {product.node.productType ? (
        <Link
          to={`/${product.node.productType.toLowerCase()}/${
            product.node.handle
          }`}
          className="product__main link"
        >
          <section>
            <Img
              className="product__image"
              fluid={product.node.images[0].localFile.childImageSharp.fluid}
            />
          </section>
          <h2>{product.node.title}</h2>
          <p>£{price}</p>
        </Link>
      ) : null}
    </>
  )
}

export default Product

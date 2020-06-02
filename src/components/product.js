import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./components.scss"

const Product = ({ product }) => {
  return (
    <Link to={`/mens/${product.node.handle}`} className="product__main link">
      <section>
        <Img
          className="product__image"
          fluid={product.node.images[0].localFile.childImageSharp.fluid}
        />
      </section>
      <h2>{product.node.title}</h2>
      <p>{product.node.priceRange.maxVariantPrice.amount}</p>
    </Link>
  )
}

export default Product

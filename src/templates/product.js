import React, { useState, useEffect, useMemo } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Thumbnail from "./components/thumbnail"
import OptionPicker from "./components/optionPicker"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "../context/CartContext.js"
import logo from "../images/logo1notext.png"

import "./templates.scss"

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  const colors = product.options.find(
    option => option.name.toLowerCase() === "color"
  )
  const sizes = product.options.find(
    option => option.name.toLowerCase() === "size"
  )

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])
  const images = useMemo(() => prepareVariantsImages(variants, "color"), [
    variants,
  ])

  if (images.length < 1) {
    throw new Error("Must have at least one product image!")
  }

  const addItemToCart = useAddItemToCart()
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(variants[0])
  const [color, setColor] = useState(variant.color)
  const [size, setSize] = useState(variant.size)
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    console.log(images)

    const newVariant = variants.find(variant => {
      return variant.size === size && variant.color === color
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [size, color, variants, variant.shopifyId, images])

  const gallery =
    images.length > 1 ? (
      <div>
        {images.map(({ src, color }) => (
          <Thumbnail key={color} src={src} onClick={() => setColor(color)} />
        ))}
      </div>
    ) : null

  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1)
    setAddedToCartMessage("🛒 Added to your cart!")
  }

  const handleQuantity = e => {
    setQuantity(e.target.value)
  }

  return (
    <Layout>
      <SEO title={product.title} />
      {addedToCartMessage ? (
        <div className="productView__added">
          {addedToCartMessage}
          <button onClick={() => setAddedToCartMessage(null)}>X</button>
        </div>
      ) : null}
      <div className="productView__main">
        <div>
          <div className="productView__image">
            <img className="productView__bgLogo" src={logo} alt="logo" />

            <img
              className="productView__productImage"
              src={variant.image.localFile.childImageSharp.fluid.src}
              alt="Product"
            />
          </div>
        </div>
        <div className="productView__desc">
          <h1>{product.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <div>
            {gallery}

            <div>
              {variant.color ? (
                <OptionPicker
                  key="Color"
                  name="Color"
                  options={colors.values}
                  selected={color}
                  onChange={event => setColor(event.target.value)}
                />
              ) : null}
              <OptionPicker
                key="Size"
                name="Size"
                options={sizes.values}
                selected={size}
                onChange={event => setSize(event.target.value)}
              />
            </div>
            <h2>£{product.priceRange.maxVariantPrice.amount}</h2>
          </div>
          <form className="productView__quantity">
            <label htmlFor="filled-number">Quantity</label>
            <input
              id="filled-number"
              label="Quantity"
              type="number"
              defaultValue="1"
              onChange={handleQuantity}
              style={{ width: "50px" }}
            />
          </form>

          <button className="productView__cartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      variants {
        shopifyId
        selectedOptions {
          name
          value
        }

        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 446) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

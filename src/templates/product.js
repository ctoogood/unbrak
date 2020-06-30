import React, { useState, useEffect, useMemo, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Thumbnail from "./components/thumbnail"
import OptionPicker from "./components/optionPicker"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useOnClickOutside } from "../hooks/hooks"
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

  const node = useRef()
  useOnClickOutside(node, () => setAddedToCartMessage(null))

  useEffect(() => {
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
    addItemToCart(variant.shopifyId, quantity)
    setAddedToCartMessage("🛒 Added to your cart!")
  }

  const handleQuantity = e => {
    setQuantity(e.target.value)
  }

  const price = product.priceRange.maxVariantPrice.amount

  return (
    <Layout>
      <SEO title={product.title} />
      {addedToCartMessage ? (
        <div ref={node} className="productView__added">
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
              {variant.size ? (
                <OptionPicker
                  key="Size"
                  name="Size"
                  options={sizes.values}
                  selected={size}
                  onChange={event => setSize(event.target.value)}
                />
              ) : null}
            </div>
            <h2>£{parseFloat(price)}</h2>
          </div>
          <form className="productView__quantity">
            <label htmlFor="filled-number">
              Quantity
              <input
                id="filled-number"
                label="Quantity"
                type="number"
                min="1"
                defaultValue="1"
                onChange={handleQuantity}
                style={{ width: "50px" }}
              />
            </label>
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
                src
              }
            }
          }
        }
      }
    }
  }
`

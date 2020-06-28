import React, { useState, useEffect, useContext } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  useCartItems,
  useCartTotals,
  useRemoveItemFromCart,
  useCheckout,
  StoreContext,
} from "../context/CartContext.js"
import "./components.scss"

const CartPage = () => {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const lineItems = useCartItems()
  const { tax, total } = useCartTotals()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckout()

  const appContext = useContext(StoreContext)

  const { cart, setCart } = appContext

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid.src
    }
    return null
  }

  const cartOpen = cart ? "cart__open" : "cart__close"

  const closeCart = () => {
    setCart(false)
  }

  const LineItem = ({ item }) => (
    <div className="cart__product">
      <div className="cart__productImage">
        <div>
          <img src={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div className="cart__productTitle">
        <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
          {item.title}
        </Link>
        <ul className="cart__productVariant">
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <strong>{name}: </strong>
              {value}
            </li>
          ))}
          <li className="cart__productQuantity" key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
        </ul>
      </div>
      <button variant="link" onClick={() => removeFromCart(item.id)}>
        Delete
      </button>
      <p>£{Number(item.variant.priceV2.amount).toFixed(2)}</p>
    </div>
  )

  const emptyCart = (
    <div className={`cart cart__emptyCart ${cartOpen} `}>
      <button onClick={closeCart} className="cart__closeButton">
        X
      </button>
      <p>Your cart is empty.</p>
      <button className="cart__continueShopping">Continue Shopping</button>
    </div>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <div className={`cart cart__main ${cartOpen}`}>
      <button onClick={closeCart} className="cart__closeButton">
        X
      </button>
      {lineItems.map(item => (
        <React.Fragment key={item.id}>
          <LineItem key={item.id} item={item} />
          <hr />
        </React.Fragment>
      ))}
      <div>
        <section>
          <hr />
          <button className="cart__continueShopping" onClick={checkout}>
            Checkout - {total}
          </button>
        </section>
      </div>
    </div>
  )
}

export default CartPage

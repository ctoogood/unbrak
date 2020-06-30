import React, { useContext, useRef } from "react"
import { useOnClickOutside } from "../hooks/hooks"
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
                  src
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
  const { total } = useCartTotals()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckout()

  const appContext = useContext(StoreContext)

  const { cart, setCart } = appContext

  const node = useRef()
  useOnClickOutside(node, () => setCart(false))

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
    <>
      <div className="cart__product">
        <div className="cart__productImage">
          <div>
            <img src={getImageFluidForVariant(item.variant.id)} alt="product" />
          </div>
        </div>
        <div className="cart__productTitle">
          <Link
            className="link"
            to={`/product/${getHandleForVariant(item.variant.id)}`}
          >
            <strong>{item.title}</strong>
          </Link>
          <ul className="cart__productVariant">
            {item.variant.selectedOptions[0].name !== "Title"
              ? item.variant.selectedOptions.map(({ name, value }) => (
                  <li key={name}>
                    <strong>{name}: </strong>
                    {value}
                  </li>
                ))
              : null}
            <li className="cart__productQuantity" key="quantity">
              <strong>Quantity: </strong>
              {item.quantity}
            </li>
          </ul>
          <p>£{Number(item.variant.priceV2.amount).toFixed(2)}</p>

          <button variant="link" onClick={() => removeFromCart(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  )

  const emptyCart = (
    <div ref={node} className={`cart cart__emptyCart ${cartOpen} `}>
      <button onClick={closeCart} className="cart__closeButton">
        X
      </button>
      <p>Your cart is empty.</p>
      <button onClick={closeCart} className="cart__continueShopping">
        Continue Shopping
      </button>
    </div>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <div ref={node} className={`cart cart__main ${cartOpen}`}>
      <button onClick={closeCart} className="cart__closeButton">
        X
      </button>
      <div className="cart__productList">
        {lineItems.map(item => (
          <React.Fragment key={item.id}>
            <LineItem key={item.id} item={item} />
            <hr />
          </React.Fragment>
        ))}
      </div>
      <div>
        <section>
          <button className="cart__continueShopping" onClick={checkout}>
            Checkout - {total}
          </button>
        </section>
      </div>
    </div>
  )
}

export default CartPage

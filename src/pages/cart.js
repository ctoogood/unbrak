import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  useCartItems,
  useCartTotals,
  useRemoveItemFromCart,
  useCheckout,
} from "../context/CartContext.js"

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
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div>
      <div>
        <div>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
          {item.title}
        </Link>
        <ul>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <strong>{name}: </strong>
              {value}
            </li>
          ))}
          <li key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
        </ul>
      </div>
      <button variant="link" onClick={() => removeFromCart(item.id)}>
        Delete
      </button>
      <p>${Number(item.variant.priceV2.amount).toFixed(2)}</p>
    </div>
  )

  const emptyCart = (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <p>Your shopping cart is empty.</p>
    </Layout>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {lineItems.map(item => (
        <React.Fragment key={item.id}>
          <LineItem key={item.id} item={item} />
          <hr />
        </React.Fragment>
      ))}
      <div>
        <section>
          <h3>Cart Summary</h3>
          <hr />

          <div>
            <p>Subtotal:</p>
            <p>{total}</p>
            <p>Shipping:</p>
            <p> - </p>
            <p>Tax: </p>
            <p>{tax}</p>
          </div>

          <hr />
          <div>
            <p variant="bold">Estimated Total:</p>
            <p variant="bold">{total}</p>
          </div>
          <button onClick={checkout}>Checkout</button>
        </section>
      </div>
    </Layout>
  )
}

export default CartPage

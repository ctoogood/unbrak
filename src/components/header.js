import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import unbrak_logo_black from "../images/unbrak_logo_black.png"
import cartIcon from "../images/shopping-cart.svg"
import { StoreContext, useCartCount } from "../context/CartContext.js"
import "./components.scss"
import CartPage from "./cart"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuActive = menu ? "is-active" : ""
  const menuClicked = menu ? "clicked-menu" : ""

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const appContext = useContext(StoreContext)

  const { setCart } = appContext

  const openCart = () => {
    setCart(true)
  }

  const count = useCartCount()

  return (
    <>
      <header>
        <section className={`menu__main ${menuActive}`}>
          <ul className="menu__list">
            <Link
              className="link menu__listItem"
              activeClassName="header__active"
              to="/mens"
            >
              Mens
            </Link>
            <Link
              className="link menu__listItem"
              activeClassName="header__active"
              to="/womens"
            >
              Womens
            </Link>
            <Link
              className="link menu__listItem"
              activeClassName="header__active"
              to="/equipment"
            >
              Equipment
            </Link>
          </ul>
        </section>
        <section className="header__content">
          <button
            className={`header__menuIcon ${menuClicked}`}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <Link className="header__title link" to="/">
            <img src={unbrak_logo_black} alt="logo" />
          </Link>
          <section className="header__links">
            <Link className="link" activeClassName="header__active" to="/mens">
              Mens
            </Link>
            <Link
              className="link"
              activeClassName="header__active"
              to="/womens"
            >
              Womens
            </Link>
            <Link
              className="link"
              activeClassName="header__active"
              to="/equipment"
            >
              Equipment
            </Link>
          </section>
          <button onClick={openCart} className="header__cart link">
            <img src={cartIcon} alt="shopping cart icon" />
            {count ? <p>{`(${count})`}</p> : null}
          </button>
        </section>
      </header>
      <CartPage />
    </>
  )
}
export default Header

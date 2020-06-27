import React from "react"
import "./components.scss"

const Thumbnail = ({ src, onClick }) => {
  return (
    <button className="thumbnail__button" onClick={onClick}>
      <img
        className="thumbnail__image"
        src={src.localFile.childImageSharp.fluid.src}
        alt="product options"
      />
    </button>
  )
}

export default Thumbnail

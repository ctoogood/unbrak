import React from "react"
import "./components.scss"

const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div className="dropdown__main">
      <label htmlFor="variants">{name}</label>
      <select name="variants" onChange={onChange} value={selected}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default OptionPicker

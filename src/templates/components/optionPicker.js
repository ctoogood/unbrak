/* eslint-disable jsx-a11y/no-onchange */

import React from "react"
import "./components.scss"

const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div className="dropdown__main">
      <label htmlFor="variants">
        {name}
        <select name="variants" onChange={onChange} value={selected}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default OptionPicker

import React from "react"
import { StoreContextProvider } from "./src/context/CartContext.js"
export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
)

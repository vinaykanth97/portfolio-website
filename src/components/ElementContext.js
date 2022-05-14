import React from "react"
import { createContext, useState, useRef } from "react"

const ElementContext = createContext()

export function ElementInfoProvider({ children }) {
  
  const elemRef = useRef()
  let test = children.map((element, idx) => {
    return React.cloneElement(element, { ref: idx })
  })
  return (
    <ElementContext.Provider value={elemRef}>{children}</ElementContext.Provider>
  )
}

export default ElementContext

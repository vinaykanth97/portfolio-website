import React, { createContext, useRef } from "react"

const elementContext = createContext()

export function ElementProvider({ children }) {
  let allRefs = {
    about: {
      reference: useRef(null),
      active: false,
    },
    services: {
      reference: useRef(null),
      active: false,
    },
    portfolio: {
      reference: useRef(null),
      active: false,
    },
    testimonials: {
      reference: useRef(null),
      active: false,
    },
    blog: {
      reference: useRef(null),
      active: false,
    },
    contactUs: {
      reference: useRef(null),
      active: false,
    },
  }
  return (
    <elementContext.Provider value={allRefs}>
      {children}
    </elementContext.Provider>
  )
}

export default elementContext

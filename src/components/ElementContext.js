import React, { createContext, useRef } from "react"

const elementContext = createContext()

export function ElementProvider({ children }) {
  let allRefs = {
    about: {
      reference: useRef(null),
      active: false,
      title: "about",
    },
    services: {
      reference: useRef(null),
      active: false,
      title: "services",
    },
    portfolio: {
      reference: useRef(null),
      active: false,
      title: "portfolio",
    },
    testimonials: {
      reference: useRef(null),
      active: false,
      title: "testimonials",
    },
    blog: {
      reference: useRef(null),
      active: false,
      title: "blog",
    },
    contactUs: {
      reference: useRef(null),
      active: false,
      title: "contactUs",
    },
  }
  return (
    <elementContext.Provider value={allRefs}>
      {children}
    </elementContext.Provider>
  )
}

export default elementContext

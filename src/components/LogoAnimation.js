import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const LogoAnimation = () => {
  const logoRef = useRef(null)
  let maxStroke = 913
  let logoAnimate = {
    hidden: {
      strokeDashoffset: 913,
      strokeDashArray: 913,
      fill: "transparent",
      transition: {
        duration: 5,
      },
    },
    visible: {
      strokeDashoffset: 0,
      strokeDashArray: 0,
      fill: "#fff",
      transition: {
        duration: 5,
      },
    },
  }
  return (
    <SvgAnimate xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.52 136.94">
      <defs></defs>
      <g id="a" />
      <g id="b">
        <g id="c">
          <motion.path
            className="d"
            d="M143.76,43.9s8.03-13.13,19.71-8.86c4.42,1.62,7.81,5.29,9.32,9.75,3.09,9.12,.68,29.1-40.03,43.12-40.71-14.02-43.12-33.99-40.03-43.12,1.51-4.46,4.9-8.13,9.32-9.75,11.69-4.27,19.71,8.86,19.71,8.86C121.1-9.09,54.33,.87,.76,1.9c3.12,7.04,25.51,8.13,33,10,24,6,45.03,36,45,73,31.76,7.86,51.23,16.07,54,52,2.77-35.93,22.24-44.14,54-52-.03-37,21-67,45-73,7.49-1.87,29.88-2.96,33-10-53.57-1.03-120.34-10.99-121,42Z"
            ref={logoRef}
          />
        </g>
      </g>
    </SvgAnimate>
  )
}
const SvgAnimate = styled.svg`
  path {
    fill-rule: evenodd;
    stroke: #fff;
    stroke-miterlimit: 10;
    fill: transparent;
    animation: anim-logo 5s infinite;
    @keyframes anim-logo {
      from {
        stroke-dasharray: 918;
        stroke-dashoffset: 918;
        stroke:#fff;
      }
      to {
        stroke-dasharray: 0;
        stroke-dashoffset: 0;
        stroke:#ff4900;
      }
    }
  }
`
export default LogoAnimation

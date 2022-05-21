import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const LogoAnimation = () => {
  let pathRef = useRef(null)

  useEffect(() => {
    let logotl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power2.Out",
        repeat: -1,
        repeatDelay: 0.2,
        yoyo: true,
      },
    })
    logotl.fromTo(
      pathRef.current,
      {
        strokeDasharray: 452,
        strokeDashoffset: 452,
        fill: "transparent",
      },
      {
        strokeDasharray: 452,
        strokeDashoffset: 0,
      }
    )
    logotl.fromTo(
      pathRef.current,
      {
        fill: "#fff",
      },
      {
        fill: "transparent",
      }
    )
  }, [])
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92.77 80.36"
      >
        <polygon
          points="32.79 34.63 32.8 34.63 46.38 58.16 59.97 34.63 59.98 34.63 73.55 11.12 46.68 11.12 52.54 22.24 47 31.77 30.12 1.5 81.86 1.5 90.17 1.5 86.02 8.7 68.28 39.42 68.28 39.44 50.54 70.17 46.38 77.36 42.23 70.17 24.49 39.44 24.49 39.42 2.6 1.5 11.72 1.5 13.66 1.5 32.79 34.63"
          fill="transparent"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="3"
          fill-rule="evenodd"
          className="logo-svg"
          ref={pathRef}
        />
      </svg>
    </>
  )
}

export default LogoAnimation

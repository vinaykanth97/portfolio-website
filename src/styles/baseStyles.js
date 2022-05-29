import styled from "styled-components"
import { motion } from "framer-motion"
export const Wrapper = styled.div`
  max-width: 71.25em;
  margin: 0 auto;
  padding: 0 0.938em;
`
export const PrimaryBtn = styled.a`
  font-size: 1.1em;
  line-height: 1;
  padding: 0.9em 1.2em;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #ffffff;
  transition: 0.5s all ease;
  position: relative;
  z-index:2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left bottom,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc);
    clip-path: circle(0% at 50% 50%);
    transition: 0.5s all ease-in;
    z-index:-1;
  }
  &:hover {
    border-color: transparent;
    &::before{
      clip-path: circle(100% at 50% 50%);
    }
  }
`
export const OverlayEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #080606;
  width: 100%;
  height: 100%;
  z-index: 22;
`
export const Topcontents = styled.div`
  text-align: center;
  max-width: 85%;
  margin: auto;
  h2 {
    margin: 0 0 0.5em;
  }
`

export const ContentTop = styled(motion.div)`
  position: relative;
  overflow: hidden;
`
export const Preloader = styled(motion.div)`

  .bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:999;
  }
  .bar-1{
    background-color: palegoldenrod;
  }
  .bar-2{
    background-color: paleturquoise;
  }
  .bar-3{
    background-color: palevioletred;
  }
`

const Frame = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:999;
`
export const Frame1 = styled(Frame)`
      background-color: palegoldenrod;
`
export const Frame2 = styled(Frame)`
      background-color: paleturquoise;
`
export const Frame3 = styled(Frame)`
       background-color: palevioletred;
`
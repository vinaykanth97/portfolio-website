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
  padding: 1.1em 1.2em;
  display: inline-block;
  background-color: transparent;
  border-radius: 0.625em;
  border: 1px solid #ffffff;
  transition: 0.3s all ease;
  &:hover {
    background: #ff4900;
    border-color: transparent;
  }
`
export const OverlayEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 100%;
`
export const Topcontents = styled.div`
  text-align: center;
  max-width: 85%;
  margin: auto;
  h2 {
    margin: 0 0 0.6em;
  }
`

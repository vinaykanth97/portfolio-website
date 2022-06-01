import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import triangleIcon from "../images/triangle.svg"
export const AnimateSectionElementTop = () => {
    return (
        <AnimateTriangleTop initial={{ rotate: "0deg" }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'linear' }} whileInView={{ rotate: "360deg" }}>
            <img src={triangleIcon} alt="" />
        </AnimateTriangleTop>

    )
}

export const AnimateSectionElementBottom = () => {
    return (
        <AnimateTriangleBottom initial={{ rotate: "360deg" }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'linear' }} whileInView={{ rotate: "0deg" }}>
            <img src={triangleIcon} alt="" />
        </AnimateTriangleBottom>
    )
}
const AnimateTriangleTop = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 8%;
    width: 100%;
    height: 10em;
    img{
        width: 100%;
        height: 100%;
    }
`
const AnimateTriangleBottom = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 8%;
    width: 100%;
    height: 10em;
    img{
        width: 100%;
        height: 100%;
    }
`
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
const LineAnime = () => {

    return (
        <LineAnimation id="Layer_2" data-name="Layer 2" viewBox="0 0 1440.53 353.91">
            <defs>
                <linearGradient id="linear-gradient" x1="0.01" y1="612.96" x2="1440.54" y2="612.96" gradientTransform="translate(0 -436)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#6f1e77" /><stop offset="0.18" stop-color="#6a207b" /><stop offset="0.4" stop-color="#5b2987" /><stop offset="0.63" stop-color="#44389c" /><stop offset="0.87" stop-color="#234cb9" />
                    <stop offset="1" stop-color="#0e59cc" />
                </linearGradient>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1-2">
                <motion.path d="M1440.5,22.89c-87.27-7.66-317.59,21.58-540.67,199.8-278.85,222.78-545.05,128.37-729-42C23.67,44.46-3.72,3.74,1,.41" transform="translate(-0.01 0)" fill="none" stroke="url(#linear-gradient)" initial={{ pathLength: 0, pathOffset: 1 }} animate={{ pathLength: 1, pathOffset: 0 }} transition={{ duration: 3 }} />
            </g>
        </LineAnimation>
    )
}
const LineAnimation = styled.svg`
position: absolute;
top: 50%;
left: 50%;
transform:translate(-50%,-50%) rotateX(180deg);
z-index: -1;
width: 100%;
height: 100%;
`
export default LineAnime
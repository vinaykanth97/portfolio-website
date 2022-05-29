/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { Frame1, Frame2, Frame3 } from "../styles/baseStyles"
import { PreloaderAnim, PageAnim } from "./allAnimations"

const Layout = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main>
        {children}
        <motion.div variants={PageAnim} initial="hidden" animate="visible">
          <Frame1 variants={PreloaderAnim}></Frame1>
          <Frame2 variants={PreloaderAnim}></Frame2>
          <Frame3 variants={PreloaderAnim}></Frame3>
        </motion.div>

      </motion.main>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

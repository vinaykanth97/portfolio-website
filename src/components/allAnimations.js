import { motion } from "framer-motion"
export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}
export const bannerFadeIn = {
  hidden: {
    x: 0,
  },
  visible: {
    x: 1000,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}
export const scaleEffect = {
  hidden: {
    scale: 0.8,
  },
  visible: {
    scale: 1,
    delay: 6,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
}

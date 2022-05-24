export const bannerScaleEffect = {
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      delay: 2,
    },
  },
}

export const RevealEffect = {
  hidden: {
    x: "0%",
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
  visible: {
    x: "100%",
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
}

export const fadeEffect = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "circInOut",
      duration: 3,
      delay: 5,
    },
  },
}

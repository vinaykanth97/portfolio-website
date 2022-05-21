export const bannerScaleEffect = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,

    transition: {
      ease: "circInOut",
      duration: 1.5,
    },
  },
}

export const RevealEffect = {
  hidden: {
    x: "0%",
  },
  visible: {
    x: "100%",
    delay: 7,
    transition: {
      ease: "circInOut",
      duration: 1.5,
    },
  },
}

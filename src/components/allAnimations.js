export const bannerScaleEffect = {
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1.5,
      delay: 2,
    },
  },
}

export const RevealEffect = {
  hidden: {
    x: "0%",
    transition: {
      ease: "easeIn",
      duration: 1.5,
    },
  },
  visible: {
    x: "100%",
    transition: {
      ease: "easeIn",
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
      ease: "linear",
      duration: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren"
    },
  },
}


export const ProgressBarEffect = {
  hidden: {
    width: '0'
  },
  visible: {
    width: 200,
    transition: {
      ease: "easeIn",
      duration: 3,
      delay: 2,
    },
  }
}


export const progressFadeEffect = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: i => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.2,
    },
  })
}

export const RevealEffectStraight = {
  hidden: {
    y: "0%",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
  visible: {
    y: "100%",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
}

export const PortfolioHover = {
  unhover: {
    x: "-100%",
    skewY: "-10deg",
    transition: {
      ease: "linear",
      duration: 0.1,
    },
  },
  hover: {
    x: "0%",
    skewY: "0deg",

    transition: {
      ease: "linear",
      duration: 0.3,
    },
  }
}

export const PreloaderAnim = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  visible: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
    }
  }
}

export const PageAnim = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  }
}
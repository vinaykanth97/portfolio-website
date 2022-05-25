import { useState } from "react"

const ItObserver = () => {
    const options = {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
    }
    let [useAnimation, setAnimation] = useState(false)
    let sectionObserver = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting ? setAnimation(true) : setAnimation(false)), options)
    return {
        scrollActions: [useAnimation],
        main: sectionObserver
    }
}
export default ItObserver
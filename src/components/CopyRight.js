import React from "react"
const CopyRight = () => {
  const dateWeb = new Date()
  let webYear = dateWeb.getFullYear()
  return (
    <p className="copy-right">
      Copyright &copy;{webYear} Coder. All Rights Reserved.
    </p>
  )
}
export default CopyRight

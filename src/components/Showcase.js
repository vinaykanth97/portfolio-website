import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"

const ShowCase = () => {
  // const showCaseDatas = useStaticQuery(graphql`
  //   query showCaseQuery {

  //   }
  // `)
  console.log(showCaseDatas)
  return (
    <div>
      <h1>ShowCase</h1>
    </div>
  )
}
export default ShowCase

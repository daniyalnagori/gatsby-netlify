import React from "react"
import { graphql } from "gatsby"

const Product = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
      }
    }
  }
`

export default Product

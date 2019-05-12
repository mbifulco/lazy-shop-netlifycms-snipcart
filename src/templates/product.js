// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
// import styled from 'styled-components'
// import kebabCase from 'lodash/kebabCase'
// import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from '../components'
// import config from '../../config'



// export const postQuery = graphql`
//   query productByID($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       code {
//         body
//       }
//       excerpt
//       frontmatter {
//         title
//         date(formatString: "MM/DD/YYYY")
//         categories
//       }
//       timeToRead
//       parent {
//         ... on File {
//           mtime
//           birthtime
//         }
//       }
//     }
//   }
// `

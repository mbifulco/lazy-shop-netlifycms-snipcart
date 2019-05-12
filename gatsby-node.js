const _ = require('lodash')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require('path')
// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions


    fmImagesToRelative(node)
    node.frontmatter && console.log(node)
//     const { frontmatter } = node
//     if (frontmatter) {
//       const { images } = frontmatter
//       if (images) {
//         images.forEach(
//           (image, i) => {
//             (frontmatter.images[i] = path.relative(
//               path.dirname(node.fileAbsolutePath),
//               path.join(__dirname, image)
//             ))}
//         )
//       }
  
// }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')
  const categoryTemplate = require.resolve('./src/templates/category.js')

  const result = await wrapper(
    graphql(`
      {
        allMdx {
          edges {
            node {
              frontmatter {
                id
                title
                tags
              }
            }
          }
        }
      }
    `)
  )

  const posts = result.data.allMdx.edges

  posts.forEach((edge, index) => {
    const next = index === 0 ? null : posts[index - 1].node
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    

    createPage({
      path: edge.node.frontmatter.id,
      component: postTemplate,
      context: {
        id: edge.node.frontmatter.id,
        prev,
        next,
      },
    })
  })


}
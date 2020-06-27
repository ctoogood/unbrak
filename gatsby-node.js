exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allShopifyProduct(filter: { productType: { eq: "Mens" } }) {
        edges {
          node {
            id
            handle
            productType
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const products = result.data.products.edges || []

  products.forEach((edge, index) => {
    const path = `/${edge.node.productType.toLowerCase()}/${edge.node.handle}`
    createPage({
      // path,
      // component: require.resolve("./src/templates/productView.js"),
      // context: { handle: edge.node.handle },
      path,
      component: require.resolve(`./src/templates/product.js`),
      context: {
        productId: edge.node.id,
      },
    })
  })
}

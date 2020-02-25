const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allHnStory(sort: { fields: [order] }, limit: 100) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `
    ).then(result => {
      if(result.errors) {
        reject(results.errors);
      }

      const template = path.resolve('./src/templates/article.js');

      result.data.allHnStory.edges.forEach(({ node }) => {
        createPage({
          path: `/item/${node.id}`,
          component: template,
          context: {
            id: node.id
          }
        })
      });
      
      resolve();
    })
  });
  
}
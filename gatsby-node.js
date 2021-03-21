import dayjs from 'dayjs';

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !dayjs().isBefore(dayjs(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/${slug.current}/`;

      createPage({
        path,
        component: require.resolve('./src/templates/BlogPost.js'),
        context: { id, pageType: 'blogPost' },
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
};

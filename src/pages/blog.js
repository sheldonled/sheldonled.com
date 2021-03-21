import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../lib/helpers';
import BlogPostList from '../components/BlogPostList';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query IndexPageQuery {
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

export default function BlogPage(props) {
  const { data } = props;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <>
      <Helmet>
        <title>Sheldon Led - Blog</title>
      </Helmet>
      <p>
        You can also follow me on{' '}
        <a href="https://medium.com/@sheldonled">Medium</a>.
      </p>
      {postNodes && (
        <BlogPostList title="Latest blog posts" nodes={postNodes} />
      )}
    </>
  );
}

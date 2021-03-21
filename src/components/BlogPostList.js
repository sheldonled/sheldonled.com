import React from 'react';
import styled from 'styled-components';

import BlogPostListItem from './BlogPostListItem';

const BlogPostListSection = styled.section`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 0 0.5rem 1.5rem;
      @media (min-width: 40rem) {
        width: calc(33% - 1rem);
      }
    }
  }
`;

function BlogPostList(props) {
  return (
    <BlogPostListSection>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostListItem {...node} />
            </li>
          ))}
      </ul>
    </BlogPostListSection>
  );
}

BlogPostList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default BlogPostList;

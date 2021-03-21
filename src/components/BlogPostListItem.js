import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PortableText from './portableText';

const BlogPostCard = styled.section`
  a {
    color: var(--jet);
    text-decoration: none;
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  img {
    width: 100%;
  }

  h3 {
    margin: 0.5rem;
  }

  p {
    margin: 0.5rem;
  }

  time {
    font-size: 0.8rem;
    display: block;
    text-align: right;
    padding: 0.2rem;
  }
`;

function BlogPostListItem(props) {
  const publishedAt = dayjs(props.publishedAt).format('DD/MMM/YYYY');

  return (
    <BlogPostCard>
      <Link to={`/${props.slug.current}`}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
        <h3>{props.title}</h3>
        {props._rawExcerpt && <PortableText blocks={props._rawExcerpt} />}
        <time dateTime={publishedAt}>{publishedAt}</time>
      </Link>
    </BlogPostCard>
  );
}

export default BlogPostListItem;

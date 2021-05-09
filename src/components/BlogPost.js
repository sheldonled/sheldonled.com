import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

import PortableText from './portableText';
import SanityImg from './SanityImg';

const Article = styled.article`
  margin: 2rem 0;

  h1 {
    line-height: 2rem;
  }

  figcaption {
    text-align: right;
  }

  img,
  .article-img {
    width: 100%;
  }
  .published-date {
    font-size: 0.8rem;
    text-align: right;
  }
  .post-aside {
    display: flex;
    justify-content: flex-end;
  }
  .post-categories {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        border: 1px solid var(--oil);
        padding: 0.2rem 0.5rem;
        margin: 0 0.5rem;
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }
`;

function BlogPost(props) {
  const {
    _rawBody,
    categories,
    title,
    mainImage,
    publishedAt,
    _updatedAt,
  } = props;
  const publishedDate = dayjs(publishedAt).format('DD/MMM/YYYY');
  const updatedDate = dayjs(_updatedAt).format('DD/MMM/YYYY');

  return (
    <Article>
      <SanityImg
        node={mainImage}
      />
      <main>
        <h1>{title}</h1>
        {publishedDate && (
          <section className="published-date">
            <span>
              Published: <time dateTime={publishedDate}>{publishedDate}</time>
            </span>
            {updatedDate && publishedDate !== updatedDate && (
              <span>
                . Updated: <time dateTime={updatedDate}>{updatedDate}</time>
              </span>
            )}
          </section>
        )}
        {_rawBody && <PortableText blocks={_rawBody} />}
      </main>
      <aside className="post-aside">
        {categories && (
          <section className="post-categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category) => (
                <li key={category._id}>{category.title}</li>
              ))}
            </ul>
          </section>
        )}
      </aside>
    </Article>
  );
}

export default BlogPost;

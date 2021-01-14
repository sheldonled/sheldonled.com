import React from 'react';
import Helmet from 'react-helmet';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Sheldon Led - Blog</title>
      </Helmet>
      <p>
        I'm currently using <a href="https://medium.com/@sheldonled">Medium</a>{' '}
        but soon my content will be available here.
      </p>
    </>
  );
}

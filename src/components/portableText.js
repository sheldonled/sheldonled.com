import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

import clientConfig from '../../clientConfig';
import SanityImg from './SanityImg';
import Code from './Code';

const Link = ({mark, children}) => {
  return (
  <a
    href={mark.href}
    target={mark.blank ? "_blank" : "" }
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
};

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: SanityImg,
    image: SanityImg,
    code: Code,
  },
  marks: {
    link: Link,
  },
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;

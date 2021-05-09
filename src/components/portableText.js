import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import BasePortableText from '@sanity/block-content-to-react';

import clientConfig from '../../clientConfig';
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

const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) return null;

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    clientConfig.sanity,
  );

  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
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

import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import BasePortableText from '@sanity/block-content-to-react';

import clientConfig from '../../clientConfig';
import Code from './Code';

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
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;

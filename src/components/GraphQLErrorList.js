import React from 'react';

const GraphQLErrorList = ({ errors }) => (
  <>
    <h1>GraphQL Error</h1>
    {errors.map((error) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </>
);

export default GraphQLErrorList;

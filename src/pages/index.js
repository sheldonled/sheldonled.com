import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const ProfilePicture = styled.img`
  width: 80%;
  max-width: 20rem;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
`;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sheldon Led</title>
      </Helmet>
      <ProfilePicture src="https://www.gravatar.com/avatar/e3035dcdf2594452454e32051493a3fc?s=320" />
      <h3>Hi, I'm Sheldon Led</h3>
      <p>
        I'm a Front-End Engineer at AWS but this place is where I express my own
        opinions and is not related to my employer.
      </p>
      <p>
        I strive every day to write better software and help people do the same.
      </p>
    </>
  );
}

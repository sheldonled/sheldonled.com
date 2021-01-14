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
      <h3>Olá, sou o Sheldon Led</h3>
      <p>
        Eu sou engenheiro de software (Front End) na AWS, mas esse site é onde
        expresso minhas opiniões e não está relacionado à empresa na qual
        trabalho.
      </p>
      <p>
        Eu busco todos os dias escrever software melhor e ajudar pessoas a fazer
        o mesmo.
      </p>
    </>
  );
}

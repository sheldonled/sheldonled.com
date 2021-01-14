import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../styles/ContentWrapper';

const FooterWrapper = styled.footer`
  background-color: var(--light-green);
  border-top: 2px solid var(--dark-green);
  padding: 0.5rem 0 0 0;
  position: absolute;
  height: 4rem;
  width: 100vw;
  bottom: 0;

  h1 {
    color: var(--black);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline;
  }

  li {
    display: inline;
    &:last-child a {
      padding-right: 0rem;
    }
  }
  a {
    padding: 0.5rem;
    color: var(--blue);
  }
`;

const Wrapper = styled(ContentWrapper)`
  flex-flow: column;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;

  @media (min-width: 26rem) {
    flex-flow: row;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Wrapper>
        <span>Sheldon Led, {new Date().getFullYear()}</span>
        <nav>
          <ul>
            <li>
              <a
                href="https://twitter.com/sheldonled"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sheldonled"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/sheldonled"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </FooterWrapper>
  );
}

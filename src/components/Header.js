import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Twitter, Github, Instagram } from '@styled-icons/fa-brands/';
import { Link } from 'gatsby';
import logo from '../assets/images/logo.svg';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import ContentWrapper from '../styles/ContentWrapper';

const Wrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 3rem 1fr 7rem;
  grid-template-rows: 1.5rem 2rem;
  padding: 0;

  @media (min-width: 26rem) {
    grid-template-columns: 5rem 1fr 7rem;
    grid-template-rows: 3rem 2rem;
    padding: 0 1rem;
  }
`;

const HeaderWrapper = styled.header`
  background-color: var(--dark-green);
  position: relative;
  margin: 0 0 4rem;
  padding: 0.5rem 0 0;

  &:after {
    content: '';
    position: absolute;
    border-top: 3.5rem solid var(--dark-green);
    border-right: 100vw solid transparent;
    top: 100%;
  }
  .logo {
    grid-column: 1;
    grid-row: 1 / span 2;
    width: 3rem;
    height: 3rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  h1 {
    grid-column: 2;
    font-size: 1.5rem;
    margin: 0 0 0 0.5rem;
    font-weight: 400;
  }
  a {
    color: var(--white);
  }

  @media (min-width: 26rem) {
    .logo {
      width: 4.5rem;
      height: 4.5rem;
      img {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
    h1 {
      font-size: 2rem;
      margin: 0.5rem 0 0 0.5rem;
    }
  }
`;

const SocialsNav = styled.nav`
  grid-column: 3;
  grid-row: 1;
  text-align: right;
  a {
    padding: 0.5rem;
  }
  @media (min-width: 26rem) {
    margin: 0.5rem 0 0 0;
  }
`;

const MenuNav = styled.nav`
  grid-column: 2 / span 2;
  grid-row: 2;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    font-size: 1.1rem;
  }
  a {
    padding: 0 0.25rem;
  }

  @media (min-width: 26rem) {
    li {
      margin: 0 1.5rem 0 0;
      font-size: 1.2rem;
    }
    a {
      padding: 0.25rem;
    }
  }
`;

export default function Header() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <HeaderWrapper>
        <Wrapper>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo - Sheldon Led" />
          </Link>
          <h1>Sheldon Led</h1>
          <SocialsNav>
            <a
              href="https://twitter.com/sheldonled"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Twitter size="20" />
            </a>
            <a
              href="https://github.com/sheldonled"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size="20" />
            </a>
            <a
              href="https://instagram.com/sheldonled"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram size="20" />
            </a>
          </SocialsNav>
          <MenuNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a href="//github.sheldonled.com/talks">Talks</a>
              </li>
            </ul>
          </MenuNav>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
}

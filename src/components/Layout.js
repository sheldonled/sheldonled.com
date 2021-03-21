import React from 'react';
import ContentWrapper from '../styles/ContentWrapper';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, pageContext }) {
  return (
    <>
      <Header />
      <ContentWrapper contentType={pageContext.pageType}>
        {children}
      </ContentWrapper>
      <Footer />
    </>
  );
}

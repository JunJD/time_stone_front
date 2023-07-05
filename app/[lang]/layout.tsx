import React from 'react';
import Navigation from './Navigation';
import { langLayoutProps } from './params.types';
import Wrapper from './Wrapper';
import MainContentWrapper from './MainContentWrapper';
import ContentWrapper from './ContentWrapper';

export default function Layout(props: langLayoutProps) {
  const { params, children } = props;

  return (
    <Wrapper>
      <Navigation lang={params.lang} />
      <MainContentWrapper>
        {/* app bar 暂时不做*/}
        <ContentWrapper>{children}</ContentWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
}

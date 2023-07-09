import React from 'react';
import Navigation from './component/Navigation';
import { langLayoutProps } from './params.types';
import Wrapper from './component/Wrapper';
import MainContentWrapper from './component/MainContentWrapper';
import ContentWrapper from './component/ContentWrapper';

interface Props extends langLayoutProps {
  main: React.ReactNode;
  login: React.ReactNode;
}

export default function Layout(props: Props) {
  const { params, main, login } = props;

  if (params.lang === 'cn') {
    return login;
  }

  return (
    <Wrapper>
      <Navigation lang={params.lang} />
      <MainContentWrapper>
        <ContentWrapper>{main}</ContentWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
}

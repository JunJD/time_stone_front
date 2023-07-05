'use client';

import React, { use } from 'react';
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import Navigation from './Navigation';
import { langLayoutProps } from './params.types';

// 容器
const Wrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

// 左右布局=>内容主体
const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

// 内容主体上下布局=>页面主体
const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export default function Layout(props: langLayoutProps) {
  const lang = use(import(`./dictionaries/${props.params.lang}.json`));

  return (
    <Wrapper className="layout-wrapper">
      <Navigation lang={lang}></Navigation>
      <MainContentWrapper className="layout-content-wrapper">
        {/* app bar */}
        <ContentWrapper className="layout-page-content">
          {props.children}
        </ContentWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
}

'use client';

import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

// 左右布局=>内容主体
export const _MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  maxHeight: '100vh',
  flexDirection: 'column',
});

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.addEventListener('scroll', (e) => {
      console.dir(e.target);
      console.dir(e.currentTarget);
    });
  }, []);

  return (
    <>
      <_MainContentWrapper className="layout-content-wrapper">
        {children}
      </_MainContentWrapper>
    </>
  );
}

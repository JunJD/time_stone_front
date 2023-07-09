'use client';

import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// 左右布局=>内容主体
export const _MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <_MainContentWrapper className="layout-content-wrapper">
        {children}
      </_MainContentWrapper>
    </>
  );
}

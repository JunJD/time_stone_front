'use client';

import { styled } from '@mui/material/styles';
import React from 'react';

// 容器
export const _Wrapper = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'row' /**默认 */,
});

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <_Wrapper className="layout-wrapper">{children}</_Wrapper>
    </>
  );
}

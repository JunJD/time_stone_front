'use client';

import { styled } from '@mui/material/styles';

// 内容主体上下布局=>页面主体
const OriginContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OriginContentWrapper className="layout-page-content">
      {children}
    </OriginContentWrapper>
  );
}

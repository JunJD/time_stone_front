'use client';

import { useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// 内容主体上下布局=>页面主体
const OriginContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
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
  // ** Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <OriginContentWrapper
      className="layout-page-content"
      sx={{
        px: 6,
        py: hidden ? 0 : 6,
      }}
    >
      {children}
    </OriginContentWrapper>
  );
}

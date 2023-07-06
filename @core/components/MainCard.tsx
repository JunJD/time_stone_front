'use client';

import { langLayoutProps } from '@/app/[lang]/params.types';
import { Box, useTheme } from '@mui/material';

interface Props extends langLayoutProps {}

export default function MainCard(props: Props) {
  const theme = useTheme();
  const { children } = props;
  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        borderRadius: '10px',
      }}
    >
      {children}
    </Box>
  );
}

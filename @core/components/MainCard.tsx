import React, { forwardRef, ForwardedRef } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Divider,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

// project import
// import Highlighter from './third-party/Highlighter';

// header style
const headerSX = {
  pb: 0.5,
  pt: 3,
  pl: 3,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
};

export interface MainCardProps extends Omit<CardProps, 'content'> {
  border?: boolean;
  boxShadow?: boolean;
  children?: React.ReactNode;
  content?: boolean;
  contentSX?: SxProps<Theme>;
  darkTitle?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: React.ReactNode;
  shadow?: boolean;
  sx?: SxProps<Theme>;
  title?: string & React.ReactNode;
}

const MainCard = (
  {
    border = true,
    children,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    elevation,
    secondary,
    sx = {},
    title,
    ...others
  }: MainCardProps,
  ref: ForwardedRef<any>,
) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: 0,
        bgcolor: theme.palette.background.default,
        ...sx,
      }}
    >
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          borderRadius: 2,
          '& pre': {
            m: 0,
            p: 2,
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem',
          },
          ...sx,
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader
            sx={headerSX}
            titleTypographyProps={{ variant: 'subtitle1' }}
            title={<strong>{title}</strong>}
            action={secondary}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            sx={headerSX}
            title={<Typography variant="h3">{title}</Typography>}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
      </Card>
    </Box>
  );
};

export default forwardRef(MainCard);

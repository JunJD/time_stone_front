'use client';

import { ChangeEventHandler, ReactNode } from 'react';
import {
  Box,
  StandardTextFieldProps,
  TextField,
  Theme,
  useMediaQuery,
} from '@mui/material';

interface ITextAreaProps extends StandardTextFieldProps {
  endDecorator?: ReactNode;
  value: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
}

function TextArea(props: ITextAreaProps) {
  const { value, handleChange, endDecorator, ...otherProps } = props;
  const minRows = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    ? 2
    : 3;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <TextField
        id="standard-multiline-TextField"
        value={value}
        onChange={handleChange}
        multiline
        rows={minRows}
        sx={{
          '& .MuiInput-root': {
            height: '78px !important',
            '& ::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}
        variant="standard"
        {...otherProps}
      />
      {endDecorator}
    </Box>
  );
}

export default TextArea;

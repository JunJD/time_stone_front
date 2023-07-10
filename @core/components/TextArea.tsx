'use client';

import { ChangeEventHandler, ReactNode } from 'react';
import {
  Box,
  FilledInput,
  FilledInputProps,
  TextareaAutosize,
  Theme,
  useMediaQuery,
} from '@mui/material';

interface ITextAreaProps extends FilledInputProps {
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
      <FilledInput
        disableUnderline
        sx={{
          p: 0.5,
          pb: 1,
          // 重写滚动条
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&.MuiFilledInput-root': {
            background: 'transparent',
          },
          '&.MuiFilledInput-root:hover': {
            background: 'transparent',
          },
        }}
        multiline
        {...otherProps}
        value={value}
        onChange={handleChange}
        inputComponent={TextareaAutosize}
        inputProps={{
          minRows: minRows,
          maxRows: 18,
          sx: {
            resize: 'none',
            mr: 2,
            '&::-webkit-scrollbar': {
              width: '3px',
              height: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#f5f5f7',
              borderRadius: '999px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#e5e5ea',
              borderRadius: '999px',
            },
          },
        }}
      />
      {endDecorator}
    </Box>
  );
}

export default TextArea;

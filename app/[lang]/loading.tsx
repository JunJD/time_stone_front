'use client';

import { Skeleton } from '@mui/material';

export default function Loading() {
  return (
    <>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </>
  );
}

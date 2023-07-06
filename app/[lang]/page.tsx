import React from 'react';
import { langProps } from './params.types';
import MainCard from '@/@core/components/MainCard';

export default function Page({ params }: langProps) {
  return (
    <MainCard params={params}>
      <code>当前语言:</code>
      {params.lang}
    </MainCard>
  );
}

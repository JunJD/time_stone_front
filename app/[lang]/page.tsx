import React from 'react';
import { langProps } from './params.types';

export default function Page({ params }: langProps) {
  return (
    <div>
      <code>当前语言:</code>
      {params.lang}
    </div>
  );
}

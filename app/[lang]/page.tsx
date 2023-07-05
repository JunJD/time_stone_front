import React, { use } from 'react';
import { langProps } from './params.types';

export default function Page({ params }: langProps) {
  const { home } = use(import(`./dictionaries/${params.lang}.json`));

  return (
    <div>
      <code>当前语言:</code>
      {params.lang}
      <div>{home.title_link}</div>
    </div>
  );
}

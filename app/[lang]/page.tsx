import React, { use } from 'react';
import { langProps } from './params.types';

export default function Page({ params }: langProps) {
  const { home } = use(import(`./dictionaries/${params.lang}.json`));

  return (
    <div style={{ height: '100vh' }}>
      <code>{JSON.stringify(home)}</code>
      {params.lang}
    </div>
  );
}

'use client';

import React from 'react';
import { langProps } from '../params.types';
import { useSettings } from '@/@core/hooks/useSettings';
import { useEffect } from 'react';
export default function Page({ params }: langProps) {
  const { settings } = useSettings();

  useEffect(() => {
    console.log(settings);
  }, [settings]);
  return (
    <div style={{ height: '100vh' }}>
      <div>{params.lang}</div>
      <div>{settings.mode}</div>
    </div>
  );
}

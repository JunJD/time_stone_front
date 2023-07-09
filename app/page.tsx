'use client';

import { useRouter } from 'next/navigation';
import useCountryLanguage from '@/@core/hooks/useCountryLanguage';
import { useEffect } from 'react';

export default function Home() {
  // ** Hook
  const lang = useCountryLanguage();
  const router = useRouter();

  useEffect(() => {
    // todo 请求接口获取语言
    router.replace('/' + lang);
  }, [lang, router]);
  return null;
}

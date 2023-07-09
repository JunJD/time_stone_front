'use client';

import cn from './cn';
import es from './es';
import en from './en';
import de from './de';
function dictionaries(lang: 'es' | 'en' | 'de' | 'cn') {
  const langs = {
    cn,
    es,
    en,
    de,
  };
  return langs[lang];
}

export default dictionaries;

import zh from './zh';
import es from './es';
import en from './en';
import de from './de';
function dictionaries(lang: 'es' | 'en' | 'de' | 'zh') {
  const langs = {
    zh,
    es,
    en,
    de,
  };
  return langs[lang];
}

export default dictionaries;

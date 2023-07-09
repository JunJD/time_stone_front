import { useLayoutEffect, useState } from 'react';

const useCountryLanguage = () => {
  const [country, setCountry] = useState<'es' | 'en' | 'de' | 'cn'>('en');
  useLayoutEffect(() => {
    try {
      const navigatorLanguage =
        navigator.language || (navigator as any)?.userLanguage;
      const languageParts = navigatorLanguage.split('-');
      const country = languageParts[languageParts.length - 1].toLowerCase();
      if (
        country !== 'en' &&
        country !== 'cn' &&
        country !== 'de' &&
        country !== 'es'
      ) {
        setCountry('en');
        return;
      }

      setCountry(country);
    } catch (error) {
      setCountry('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return country;
};

export default useCountryLanguage;

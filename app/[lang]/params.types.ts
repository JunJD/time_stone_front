export interface langProps {
  params: {
    lang: 'es' | 'en' | 'de' | 'cn';
  };
}

export interface langLayoutProps {
  params: {
    lang: 'es' | 'en' | 'de' | 'cn';
  };
  children: React.ReactNode;
}

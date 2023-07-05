export interface langProps {
  params: {
    lang: 'es' | 'en' | 'de' | 'zh';
  };
}

export interface langLayoutProps {
  params: {
    lang: 'es' | 'en' | 'de' | 'zh';
  };
  children: React.ReactNode;
}

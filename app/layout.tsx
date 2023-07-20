import Providers from './Providers';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'timeStone',
  description: '一个专注于利用碎片时间提升个人能力的网站',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: '/testicon.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {/* 一些全局配置 */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

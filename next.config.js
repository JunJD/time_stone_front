const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZER === 'true',
});

const nextConfig = withPlugins([[bundleAnalyzer]], {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh',
        permanent: true,
      },
    ];
  },
  // 其他的Next.js配置项
});

module.exports = nextConfig;

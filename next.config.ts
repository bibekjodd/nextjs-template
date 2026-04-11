import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'unsafe-none' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }
        ]
      }
    ];
  }
};

export default nextConfig;

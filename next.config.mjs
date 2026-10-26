/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/avaliacoes', destination: '/reviews/', permanent: true },
      { source: '/equipe/:path*', destination: '/team/:path*', permanent: true },
      { source: '/contato', destination: '/contact/', permanent: true },
      { source: '/dicas/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/sobre', destination: '/about/', permanent: true },
      { source: '/servicos', destination: '/services/', permanent: true },
      { source: '/orcamento', destination: '/quote/', permanent: true },
      { source: '/gas-appliance-installations', destination: '/services/', permanent: true },
      { source: '/gutters-downpipes', destination: '/fascia-soffit-guttering/', permanent: true },
      { source: '/hot-water-service-maintenance-installations', destination: '/services/', permanent: true },
      { source: '/metal-roofing', destination: '/roof-replacement/', permanent: true },
      { source: '/plumbing-maintenance-repairs', destination: '/services/', permanent: true },
      { source: '/toilet-installations', destination: '/services/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};
export default nextConfig;

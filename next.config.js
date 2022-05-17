/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/task/:path*',
          destination: 'https://esi-list.vercel.app/:path*',
        },
      ]
    },
};
module.exports = nextConfig

import "./pages/api/task"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const cors = {
  async rewrites() {
      return [
        {
          source: '/api/task/:path*',
          destination: 'https://esi-list.vercel.app/:path*',
        },
      ]
    },
};
module.exports = nextConfig, cors

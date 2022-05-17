import "./pages/api/task"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/task/',
        destination: 'https://esi-list.vercel.app/',
      },
    ]
  },
}

module.exports = nextConfig

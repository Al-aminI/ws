/** @type {import('next').NextConfig} */
const nextConfig = {
    //... other config options ...
  async headers() {
    return [
      {
        source: '/public/favicon.svg',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
    ];
  },

}

module.exports = nextConfig

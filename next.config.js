module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/meet', destination: 'https://cal.com/coderdiaz/mentoria-privada', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/stats/:match*',
        destination: 'https://analytics.coderdiaz.com/:match*',
      },
    ];
  },
};

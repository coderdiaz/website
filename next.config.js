module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/stats/:match*',
        destination: 'https://stats.coderdiaz.dev/:match*',
      },
    ];
  },
};

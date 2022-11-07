module.exports = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/oformit-zakaz/page/1',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
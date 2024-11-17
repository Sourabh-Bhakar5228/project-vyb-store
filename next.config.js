// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // experimental: { serverActions: true },
// };
// module.exports = nextConfig;

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/@dhiwise\/react-switch/,
        use: {
          loader: "babel-loader",
        },
      });
    }
    return config;
  },
};

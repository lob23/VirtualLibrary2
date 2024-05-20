/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: false,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.node$/,
        use: [
          {
            loader: "node-loader",
          },
        ],
      })
   
      return config
    },
  }

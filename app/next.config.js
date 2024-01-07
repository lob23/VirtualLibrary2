/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
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

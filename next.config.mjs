import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    LOCAL_API_URL: process.env.LOCAL_API_URL,
  },
  images: {
    domains: ["localhost"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.riv$/,
      use: "raw-loader", // O el cargador que necesites para manejar archivos .riv
    });
    return config;
  },
};

export default nextConfig;

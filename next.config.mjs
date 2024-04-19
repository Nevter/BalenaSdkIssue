import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias['balena-sdk'] = path.resolve('./node_modules/balena-sdk/es2015');
    config.resolve.alias['pinejs-client-core'] = path.resolve('./node_modules/pinejs-client-core/es2015');
    return config
  },
};

export default nextConfig;

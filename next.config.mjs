/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The store is gone — /shop is now /platforms (we service, don't sell).
      // Keeps old links working, including those inside the untouched /vizus.
      { source: "/shop", destination: "/platforms", permanent: true },
      // The old singular /service page became the additive services pillar.
      { source: "/service", destination: "/services/additive", permanent: true },
    ];
  },
};

export default nextConfig;

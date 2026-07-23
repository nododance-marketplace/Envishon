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
      // Laser welding + cleaning merged into one page (one machine does both).
      { source: "/services/laser-welding", destination: "/services/laser", permanent: true },
      { source: "/services/laser-cleaning", destination: "/services/laser", permanent: true },
    ];
  },
};

export default nextConfig;

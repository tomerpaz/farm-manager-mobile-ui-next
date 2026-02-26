import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
}
 
export default nextConfig
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  // Only apply 'export' during production builds to fix the development crash
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined, 
  distDir: 'build', 
  images: {
    unoptimized: true, 
  },
}
 
export default nextConfig

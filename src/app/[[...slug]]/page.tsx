import { ClientOnly } from './client'
 
export function generateStaticParams() {
  // Providing an empty array and a wildcard satisfies the Next.js export check,
  // allowing HashRouter to handle all the deep paths during local development.
  return [
    { slug: [] },
    { slug: ['index'] }
  ]
}
 
export default function Page() {
  return <ClientOnly />
}

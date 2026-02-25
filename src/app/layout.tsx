import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Farm Manager',
  description: 'Farm Manager',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <head>
                <meta name="theme-color" content="#49A05E" />
                {/* <!--
                manifest.json provides metadata used when your web app is installed on a
                user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
                {/* <!--
                Notice the use of %PUBLIC_URL% in the tags above.
                It will be replaced with the URL of the `public` folder during the build.
                Only files inside the `public` folder can be referenced from the HTML.

                Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                work correctly both with client-side routing and a non-root public URL.
                Learn how to configure a non-root public URL by running `npm run build`.
    --> */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
                    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
                    crossOrigin="" />
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.76.1/dist/L.Control.Locate.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.76.1/dist/L.Control.Locate.min.js"></script>
                <title>Farm Manager Mobile</title>
            </head>

            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">{children}</div>
            </body>

        </html>
    )
}
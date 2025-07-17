
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TravelBuddy - Nitin Chakraborty',
  description: 'Variety Of Tour Packages, Best Deals & Personalised Services!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/Assets/Favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
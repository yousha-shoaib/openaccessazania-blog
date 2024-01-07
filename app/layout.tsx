import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layout/Header'
import Footer from './layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenAccessAzania',
  description: 'Welcome to the OpenAccessAzania blog page.',
  icons: {
    icon: "/images/oaa-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

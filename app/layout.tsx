import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // Using Inter as a common, clean font
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav' // Import MainNav
import { Footer } from '@/components/footer' // Import Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hat Haven - Your Premier Hat Store',
  description: 'Discover a wide variety of stylish hats at Hat Haven. Quality craftsmanship and unique designs for every occasion.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full flex flex-col antialiased`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <MainNav /> {/* Add MainNav here */}
          <main className="flex-1">
            {children}
          </main>
          <Footer /> {/* Add Footer here */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import "@/styles/globals.css"
import { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const title = 'Color Gradient Picker built with Shadcn UI, Radix UI and Tailwind CSS'
const description = 'Accessible and customizable gradient color picker component. Free. Open Source. Next.js 13 Ready.'
const url = 'https://gradientpicker.vercel.app'
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  applicationName: 'Gradient Picker',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: 'max-image-preview:standard',
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: 'Gradient Picker',
    images: [{
      url: `${url}/social.jpg`,
      width: 1200,
      height: 600,
      alt: title,
    }],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@illyism',
    images: [{
      url: `${url}/social.jpg`,
      width: 1200,
      height: 600,
      alt: title,
    }],
  },
}

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

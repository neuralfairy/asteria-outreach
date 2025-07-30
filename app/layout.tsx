import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChat } from "@/components/live-chat"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asteriaoutreach Solutions - CRM Implementation Experts",
  description:
    "Professional CRM implementation and optimization services. Transform your sales processes with expert CRM consulting and system integration.",
  keywords: "CRM setup, sales process optimization, system integration, crm implementation, B2B sales tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Asteriaoutreach Solutions",
              url: "https://asteriaoutreach.com",
              logo: "https://asteriaoutreach.com/logo.png",
              description: "Professional CRM implementation and optimization services",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albany",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <LiveChat />
        <ExitIntentPopup />
      </body>
    </html>
  )
}

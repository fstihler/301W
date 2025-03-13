import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
})

export const metadata = {
  title: "Book 301W | New York",
  description: "Experience luxury in the heart of Manhattan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Waquas Ahmad - Laravel Developer | PHP Developer | Fresher Web Developer",
  description:
    "Waquas Ahmad is a skilled web developer specializing in PHP, Laravel, Java, and MySQL. Currently pursuing MCA and working as a Laravel Developer. Available for web development opportunities.",
  keywords:
    "Laravel Developer, PHP Developer, Fresher Web Developer, Java Developer, MySQL, Web Development, Backend Developer, Waquas Ahmad",
  authors: [{ name: "Waquas Ahmad" }],
  openGraph: {
    title: "Waquas Ahmad - Laravel Developer | PHP Developer",
    description:
      "Skilled web developer specializing in PHP, Laravel, Java, and MySQL. Building practical web applications with clean, efficient code.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

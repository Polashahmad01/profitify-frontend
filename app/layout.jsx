import { Poppins } from "next/font/google"

import "./globals.css"
import AppNavbar from "@/components/AppNavbar"
import AppFooter from "@/components/AppFooter"

const poppins = Poppins({ subsets: ["devanagari"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: "Profitify",
  description: "An AI powered marketing tool",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main>
          <AppNavbar />
          {children}
          <AppFooter />
        </main>
      </body>
    </html>
  )
}

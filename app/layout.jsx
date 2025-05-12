import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tran Hai Bang Portfolio",
  description: "Portfolio cá nhân của Tên Của Bạn - Nhà phát triển web",
  generator: 'v0.dev',
  icons: {
    icon: "/portfolio.png", // hoặc /favicon.svg, hoặc object nếu nhiều size
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tech daily",
  description:
    "Learn about tech products, related tech innovation and technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={` ${geistMono.variable} antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-8 ">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

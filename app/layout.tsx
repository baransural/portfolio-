import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"], // Türkçe karakterler (ş, ğ, İ) için latin-ext
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Baran Sural",
  description: "Baran Sural — bilgisayar mühendisliği öğrencisi ve geliştirici.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // next-themes html'e class yazdığı için hydration uyarısını kapatıyorum
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* varsayılan koyu, sistem temasına bakma */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
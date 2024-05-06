import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import AppNavbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallops Island",
  description: "Guide to Wallops Island",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        <Providers>
          <AppNavbar />
          <main className="h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
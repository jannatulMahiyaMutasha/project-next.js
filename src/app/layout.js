"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Footer></Footer>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

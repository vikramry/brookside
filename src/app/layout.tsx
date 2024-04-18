import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brook",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="g0qhvJ6n-eHI9d3V4D78bBwCYJALhVgHgYs1Se75AUI" />
      <body className="flex justify-center items-center">
        <Header />
        <div className="flex min-h-screen flex-col w-full max-w-screen-2xl justify-center">
          <div className="mt-20">

            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

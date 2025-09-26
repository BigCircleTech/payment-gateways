import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payment Gateways Demo",
  description: "Demo of payment gateways using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-website-id="68d6170dedf652ddf163eaeb"
          data-domain="test.tracksource.dev"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body className={`${inter.className} h-min-screen`}>
        {children}
        <ToastContainer position="top-center" draggable={true} />
        <Analytics />
      </body>
    </html>
  );
}
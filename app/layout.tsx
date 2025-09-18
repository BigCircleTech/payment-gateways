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
          data-website-id="971a2872-ba13-4d79-9366-c40e5d0fcf36"
          data-api-key="971a2872-ba13-4d79-9366-c40e5d0fcf36"
          data-endpoint="https://api.ts.protoshare.app/api/track/events"
          src="https://ts.protoshare.app/tracking/tracksource.debug.js">
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

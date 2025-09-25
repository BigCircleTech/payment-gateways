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
          src="https://ts.protoshare.app/tracking/tracksource.js"
          data-api-key="sk_test_E8rDWFFUyzoDeIleydBXhLePGCXHCWVR"
          data-website-id="84bfc96e-eb05-4301-889b-966e80af0dd1"
          data-domain="test.tracksource.dev"
          data-endpoint="https://api.ts.protoshare.app/api/track/events"
          data-debug="false"
          async
          >
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
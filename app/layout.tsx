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
  data-website-id="c462c7cf-8eb9-49c5-9ffa-6aed73c4cf31"
  data-domain="source-track-stripe-test.vercel.app"
  data-endpoint="https://api.ts.protoshare.app/api/track"
  data-debug="false"
  async>
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
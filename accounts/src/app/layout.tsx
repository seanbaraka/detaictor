import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/ui/layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Detaictor",
  description: "Your number one source for detecting AI generated content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <PayPalScriptProvider
          options={{
            clientId:
              "AZOR62tJaGhQBZs6sDIRnHuVlg-2uZiaCcshm6auP0QUAkL39XvOmhehmsdzV5F_vFBAunUR-SA35at8",
          }}
        > */}
        <SiteLayout>{children}</SiteLayout>
        {/* </PayPalScriptProvider> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Iaboni Real Estate, Inc. | Commercial Real Estate Experts", template: "%s | Iaboni Real Estate" },
  description: "Full-service commercial real estate firm specializing in landlord and tenant representation throughout the US and Canada. 45+ years of combined experience.",
  keywords: ["commercial real estate", "landlord representation", "tenant representation", "retail leasing"],
  openGraph: {
    type: "website", locale: "en_US", url: "https://iabonirealestate.com", siteName: "Iaboni Real Estate, Inc.",
    title: "Iaboni Real Estate, Inc. | Commercial Real Estate Experts",
    description: "Full-service commercial real estate firm with 45+ years of combined experience.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link rel="canonical" href="https://iabonirealestate.com" /></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

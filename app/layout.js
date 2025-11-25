import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "VUSD.AI — Private, AI-Governed USD Stablecoin",
  description:
    "VUSD is a private, AI-governed USD stablecoin with ZK-powered privacy, autonomous risk management and self-defending stability infrastructure.",
  keywords: [
    "VUSD",
    "stablecoin",
    "AI-governed",
    "zero-knowledge",
    "privacy",
    "crypto",
    "DeFi",
    "financial infrastructure",
  ],
  applicationName: "VUSD.AI",
  creator: "VUSD.AI",
  metadataBase: new URL("https://vusd.ai"),
  openGraph: {
    title: "VUSD.AI — Private, AI-Governed USD Stablecoin",
    description:
      "Private, AI-governed USD stablecoin with ZK privacy and an autonomous stability engine, engineered for the next financial era.",
    url: "https://vusd.ai",
    siteName: "VUSD.AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VUSD.AI — Private, AI-Governed USD Stablecoin",
    description:
      "VUSD combines zero-knowledge privacy, an autonomous stability engine and self-defending infra into a new class of stable asset.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <div className="bg-grid" />
        <div className="orbits">
          <div className="orbit-dot" />
        </div>
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

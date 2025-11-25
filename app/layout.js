import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "VUSD.AI — Private, AI-Governed Stablecoin",
  description:
    "VUSD — private, AI-governed USD stablecoin with ZK privacy and autonomous risk management.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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

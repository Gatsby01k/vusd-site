import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "VUSD.AI — Private, AI-Governed Stablecoin",
  description:
    "VUSD — private, AI-governed USD stablecoin with ZK privacy and autonomous risk management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

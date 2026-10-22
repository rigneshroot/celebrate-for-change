import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { isIndexable, siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Celebrate for Change | Birthday giving guide",
    template: "%s | Celebrate for Change",
  },
  description:
    "Find an organisation to support for your birthday, learn where it works, and give on its own website. A student-built celebration-giving guide.",
  robots: { index: isIndexable, follow: isIndexable },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

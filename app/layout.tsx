import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateosonaglia.com"),
  title: { default: "Mateo Sonaglia | Marketing, Partnerships & Leadership", template: "%s | Mateo Sonaglia" },
  description: "Explore how Mateo Sonaglia is building a career through marketing, partnerships, AMA leadership, entrepreneurship, and experience at The Cheesecake Factory Bakery and Apple.",
  openGraph: { title: "Mateo Sonaglia | Marketing, Partnerships & Leadership", description: "Marketing, partnerships, leadership, and entrepreneurship.", url: "https://mateosonaglia.com", siteName: "Mateo Sonaglia", type: "website", images: [{ url: "https://mateosonaglia.com/og.png", width: 1536, height: 1024, alt: "Mateo Sonaglia, connecting markets, people, and growth" }] },
  twitter: { card: "summary_large_image", title: "Mateo Sonaglia | Marketing, Partnerships & Leadership", description: "Marketing, partnerships, leadership, and entrepreneurship.", images: ["https://mateosonaglia.com/og.png"] },
};

const nav = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header shell">
          <Link className="brand" href="/" aria-label="Mateo Sonaglia, home"><span className="brand-dot" /><strong>Mateo<br />Sonaglia</strong><span className="brand-role">Marketing, Partnerships<br />&amp; Leadership</span></Link>
          <nav aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
          <Link className="header-contact" href="mailto:mateosonaglia12@gmail.com">Email me</Link>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div><p className="eyebrow light">Mateo Sonaglia</p><h2>Marketing. Partnerships.<br />Leadership.</h2></div>
            <div><b>Navigate</b>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
            <div><b>Connect</b><a href="mailto:mateosonaglia12@gmail.com">Email</a><a href="https://www.linkedin.com/in/mateo-sonaglia-0b5757264" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
          <div className="shell footer-bottom"><span>© 2026 Mateo Sonaglia</span><span>Marketing, partnerships, leadership, and entrepreneurship.</span></div>
        </footer>
      </body>
    </html>
  );
}

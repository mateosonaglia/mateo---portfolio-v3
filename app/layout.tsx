import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateosonaglia.com"),
  title: { default: "Mateo Sonaglia | Global Marketing and Brand Strategy", template: "%s | Mateo Sonaglia" },
  description: "Mateo Sonaglia connects markets, people, and growth through global marketing, sales, strategy, leadership, and relationship building.",
  openGraph: { title: "Mateo Sonaglia | Global Marketing and Brand Strategy", description: "Connecting markets, people, and growth.", url: "https://mateosonaglia.com", siteName: "Mateo Sonaglia", type: "website", images: [{ url: "https://mateosonaglia.com/og.png", width: 1536, height: 1024, alt: "Mateo Sonaglia, connecting markets, people, and growth" }] },
  twitter: { card: "summary_large_image", title: "Mateo Sonaglia | Global Marketing and Brand Strategy", description: "Connecting markets, people, and growth.", images: ["https://mateosonaglia.com/og.png"] },
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
        <header className="site-header shell">
          <Link className="brand" href="/" aria-label="Mateo Sonaglia, home"><span className="brand-dot" /><strong>Mateo<br />Sonaglia</strong><span className="brand-role">Global Marketing<br />&amp; Brand Strategy</span></Link>
          <nav aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
          <Link className="header-contact" href="mailto:mateosonaglia12@gmail.com">Email me <span>↗</span></Link>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div><p className="eyebrow light">Mateo Sonaglia</p><h2>Global perspective.<br />Human connection.<br />Meaningful growth.</h2></div>
            <div><b>Navigate</b>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
            <div><b>Connect</b><a href="mailto:mateosonaglia12@gmail.com">Email</a><a href="https://www.linkedin.com/in/mateo-sonaglia-0b5757264" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          </div>
          <div className="shell footer-bottom"><span>© 2026 Mateo Sonaglia</span><span>Connecting markets, people, and growth.</span></div>
        </footer>
      </body>
    </html>
  );
}

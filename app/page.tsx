import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <h1>Connecting markets, people, and <em>growth.</em></h1>
        <p className="hero-kicker">Marketing · Partnerships · Business Development</p>
        <p className="hero-lede">I&apos;m Mateo Sonaglia. I study marketing and global business at Cal Lutheran, lead our American Marketing Association chapter, and co-founded GETALIKE. Alongside that, I&apos;m building experience in sales and marketing at The Cheesecake Factory Bakery and Apple.</p>
        <div className="button-row">
          <Link className="button button-primary" href="/projects">View Projects</Link>
          <Link className="button button-secondary" href="/resume">Resume</Link>
          <Link className="button button-quiet" href="/contact">Contact</Link>
        </div>
      </div>
      <div className="hero-portrait"><div className="portrait-frame"><Image src="/images/mateo-london.jpg" alt="Professional portrait of Mateo Sonaglia" fill priority sizes="(max-width: 900px) 92vw, 38vw" /></div><div className="portrait-note"><b>Mateo Sonaglia</b><br />Marketing, leadership &amp; entrepreneurship</div><div className="portrait-shape" /></div>
    </section>

    <section className="section shell home-highlights">
      <div className="section-heading"><div><p className="eyebrow">Recent highlights</p><h2>A closer look at my work.</h2></div><Link className="text-link" href="/projects">All projects</Link></div>
      <div className="highlight-stories">
        <Link href="/projects/leadership"><p className="eyebrow">AMA · President</p><h3>Taking the classroom to New York.</h3><p>I led our chapter&apos;s career trip to meet teams at Google, the NFL, Hightouch, Ogilvy, and Chubb. Back on campus, I recently moderated a fireside chat with former CMO Alan Cohen.</p><span className="text-link">Explore my leadership work</span></Link>
        <Link href="/projects/getalike"><p className="eyebrow">GETALIKE · Co-Founder &amp; CEO</p><h3>Building a business with local organizations.</h3><p>My co-founder and I work with businesses and nonprofits on marketing strategy and video content. Our work includes promoting City Impact&apos;s Beachfront Run, an event that reached more than 1,250 registrations.</p><span className="text-link">Learn about GETALIKE</span></Link>
        <Link href="/projects/international-marketing"><p className="eyebrow">The Cheesecake Factory Bakery</p><h3>Researching how a brand grows internationally.</h3><p>During my internship, I worked on international market research, sales materials, and a LinkedIn strategy. I&apos;ve since returned to the company as a Sales Support Technician.</p><span className="text-link">View the marketing project</span></Link>
      </div>
    </section>

    <section className="section origin-story">
      <div className="shell origin-grid">
        <div><p className="eyebrow light">About me</p><h2>What keeps me interested.</h2></div>
        <div className="story-copy"><p>I like meeting people, asking questions, and understanding how things work behind the scenes. That curiosity has taken me into international marketing, student leadership, and starting a business while finishing my degree.</p><p>As AMA President, I enjoy working with our executive team to bring professionals to campus and give students a closer look at different careers. With GETALIKE, I get to sit down with business owners, understand what they want to achieve, and help shape how they tell their story.</p><p>I&apos;m graduating from Cal Lutheran in December 2026. I&apos;m especially interested in where partnerships, brand marketing, and business development meet, including in sports and entertainment.</p></div>
      </div>
    </section>

    <section className="section shell connection-section">
      <div className="section-heading"><div><p className="eyebrow">Current experience</p><h2>Where I&apos;m spending my time.</h2></div><Link className="text-link" href="/resume">Full experience</Link></div>
      <div className="value-grid current-work">
        <article><p className="eyebrow">Sales support</p><h3>The Cheesecake Factory Bakery</h3><p>Sales Support Technician · September 2026–Present</p><p>Continuing with the company after my international sales, marketing, and business development internship.</p></article>
        <article><p className="eyebrow">Retail sales</p><h3>Apple</h3><p>Sales Specialist · November 2026–Present</p><p>Working directly with customers, understanding their needs, and helping them find the right products.</p></article>
        <article><p className="eyebrow">Community marketing</p><h3>SOM-thing Local</h3><p>Project Leader · Cal Lutheran</p><p>Coordinating student content teams and local business features through the School of Management Brand Ambassadors.</p></article>
      </div>
    </section>

    <section className="section shell closing"><p className="eyebrow">Get in touch</p><h2>Want to talk about a project or collaboration?</h2><Link className="button button-accent" href="/contact">Connect with Mateo</Link></section>
  </>;
}

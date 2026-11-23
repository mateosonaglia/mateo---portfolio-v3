import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="career-home">
    <section className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">Mateo Sonaglia · Marketing, partnerships &amp; leadership</p>
        <h1>Turning initiative<br />into <em>impact.</em></h1>
        <p className="hero-kicker">Building a career by building things that matter.</p>
        <p className="hero-lede">I bring people together and move ideas forward. From leading a marketing association to building a business and gaining experience with global brands, I&apos;m learning by taking ownership, creating opportunities, and following through.</p>
        <div className="button-row"><Link className="button button-primary" href="/projects">Explore my work</Link><a className="button button-secondary" href="#my-story">Get to know me</a></div>
        <p className="hero-context">Based in Los Angeles · Cal Lutheran, Class of 2026</p>
      </div>
      <div className="hero-portrait"><div className="portrait-frame"><Image src="/images/mateo-london.jpg" alt="Mateo Sonaglia in London" fill priority sizes="(max-width: 900px) 92vw, 38vw" /></div><div className="portrait-note"><span>A career in the making</span><b>Curiosity. Ownership. Connection.</b></div><div className="portrait-shape" /></div>
    </section>

    <section className="career-context" aria-label="Current experience"><div className="shell context-inner"><p>Where I&apos;m building</p><div><span>The Cheesecake Factory Bakery</span><span>Apple</span><span>AMA at Cal Lutheran</span><span>GETALIKE</span></div></div></section>

    <section className="section shell career-story" id="my-story">
      <div><p className="eyebrow">The story so far</p><h2>I don&apos;t wait for a role to <em>make a contribution.</em></h2></div>
      <div className="story-copy"><p>I&apos;ve always been drawn to the moment a conversation becomes something real: a business collaboration, an event that opens someone&apos;s eyes, or an idea a team decides to build together.</p><p>At Cal Lutheran, that instinct led me from AMA Vice President to President. I began taking on more responsibility: leading our executive team, bringing industry leaders to campus, and organizing experiences that help students see what comes next.</p><p>That same approach carries into my work. I&apos;m building GETALIKE with my co-founder, continuing at The Cheesecake Factory Bakery after my internship, and developing my customer-facing experience at Apple. Each role is teaching me something different about people, brands, and execution.</p><p className="story-signoff">My international perspective shapes how I connect. My initiative shapes what I do with those connections.</p></div>
    </section>

    <section className="home-work section"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">Initiative in action</p><h2>The work behind<br />the story.</h2></div><Link className="text-link" href="/projects">Explore all projects</Link></div>
      <article className="leadership-feature">
        <div className="feature-photo"><Image src="/images/creator-challenge.jpg" alt="AMA students and marketing leaders together at the Cheesecake Factory Creator Challenge" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
        <div className="feature-copy"><p className="eyebrow">Leadership · American Marketing Association</p><h3>Opening doors<br />beyond campus.</h3><p>As AMA President, I lead an executive team that turns professional relationships into experiences students can learn from.</p><ul><li>Led a New York career trip with visits to Google, the NFL, Hightouch, Ogilvy, and Chubb.</li><li>Moderated “Lessons from the Marketing C-Suite” with former CMO Alan Cohen.</li><li>Led the AMA × Cheesecake Factory Creator Challenge, connecting student teams with senior marketing leaders.</li></ul><Link className="text-link" href="/projects/leadership">See my leadership work</Link></div>
      </article>
      <div className="home-work-pair">
        <article className="venture-feature"><p className="eyebrow light">Entrepreneurship · Co-Founder &amp; CEO</p><h3>Building GETALIKE.<br />Learning by doing.</h3><p>Helping local businesses and nonprofits connect strategy with storytelling, while learning what it takes to earn trust, develop partnerships, and deliver creative work.</p><div className="venture-result"><strong>1,250+</strong><p>registrations at City Impact&apos;s Beachfront Run, which our team supported through promotional content and marketing strategy.</p></div><Link className="text-link light-link" href="/projects/getalike">Inside the venture</Link></article>
        <article className="brand-feature"><div className="brand-feature-photo"><Image src="/images/cheesecake-overview.jpg" alt="The Cheesecake Factory Bakery international marketing project" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div className="brand-feature-copy"><p className="eyebrow">Experience · The Cheesecake Factory Bakery</p><h3>From market insight<br />to business execution.</h3><p>My international sales and marketing internship introduced me to market research, brand strategy, and business development. Today, I&apos;m continuing that experience in sales support.</p><Link className="text-link" href="/projects/international-marketing">Explore the strategy work</Link></div></article>
      </div>
    </div></section>

    <section className="section shell career-chapter">
      <div><p className="eyebrow">Building the next chapter</p><h2>Different roles.<br /><em>A shared direction.</em></h2><p className="chapter-intro">I&apos;m developing a career at the intersection of marketing, partnerships, and business development, with a growing interest in sports and entertainment.</p><Link className="text-link" href="/resume">View my full experience</Link></div>
      <div className="career-roles">
        <article><p>Sales &amp; business operations</p><h3>The Cheesecake Factory Bakery</h3><span>Sales Support Technician · September 2026–Present</span><p>Continuing with the company after my international sales, marketing, and business development internship.</p></article>
        <article><p>Customer experience &amp; sales</p><h3>Apple</h3><span>Sales Specialist · November 2026–Present</span><p>Building customer relationships, understanding individual needs, and helping people find the right solutions.</p></article>
        <article><p>Leadership &amp; entrepreneurship</p><h3>AMA, GETALIKE &amp; SOM-thing Local</h3><span>President · Co-Founder &amp; CEO · Project Leader</span><p>Leading teams, building community partnerships, and turning ideas into events, content, and opportunities.</p></article>
      </div>
    </section>

    <section className="home-invitation"><div className="shell"><p className="eyebrow light">Let&apos;s connect</p><h2>Good things start<br />with a conversation.</h2><p>A shared idea, a potential collaboration, or a chance to learn from each other. I&apos;d love to hear from you.</p><Link className="button button-secondary" href="/contact">Get in touch</Link></div></section>
  </div>;
}

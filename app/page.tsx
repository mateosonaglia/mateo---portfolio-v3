import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <h1>Connecting markets, people, and <em>growth.</em></h1>
        <p className="hero-kicker">Global perspective. Human connection. Meaningful growth.</p>
        <p className="hero-lede">I&apos;m Mateo Sonaglia. I grew up in Bolivia and moved to the United States at 18, learning to turn unfamiliar places into opportunities for connection. Today, I bring that same curiosity to partnerships, sales, marketing, and business development—connecting people and ideas to move meaningful work forward.</p>
        <div className="button-row">
          <Link className="button button-primary" href="/projects">View Projects <span>→</span></Link>
          <Link className="button button-secondary" href="/resume">Resume <span>↗</span></Link>
          <Link className="button button-quiet" href="/contact">Contact</Link>
        </div>
      </div>
      <div className="hero-portrait"><div className="portrait-frame"><Image src="/images/mateo-london.jpg" alt="Professional portrait of Mateo Sonaglia" fill priority sizes="(max-width: 900px) 92vw, 38vw" /></div><div className="portrait-note"><b>Building Across Markets</b><br />Growth Through Connection</div><div className="portrait-shape" /></div>
    </section>

    <section className="section origin-story">
      <div className="shell origin-grid">
        <div><p className="eyebrow light">My story</p><h2>New environments taught me how to <em>create opportunity.</em></h2></div>
        <div className="story-copy"><p>Leaving Bolivia at 18 meant building a life in a new country, navigating unfamiliar environments, and finding community from the ground up. Along the way, I learned to listen, adapt across cultures, and take initiative—even when the next step was not obvious.</p><p>Those lessons now shape my work: collaborating across international markets at The Cheesecake Factory Bakery, building GETALIKE with my co-founder, and creating opportunities for students through AMA. Whether I am meeting a local business owner or planning a career trip, I care about understanding people and turning a conversation into action.</p><blockquote>A person&apos;s starting point should not determine how far they can go.</blockquote></div>
      </div>
    </section>

    <section className="section shell connection-section">
      <div className="section-heading"><div><p className="eyebrow">How I create value</p><h2>Growth starts with understanding people, markets, and opportunity.</h2></div></div>
      <div className="value-grid">
        <article><span>01</span><h3>Understand the context</h3><p>I bring global curiosity and careful research to understand markets, cultures, people, and the real question behind an opportunity.</p></article>
        <article><span>02</span><h3>Build genuine trust</h3><p>I listen, communicate clearly, and make people feel valued so ideas can develop into useful relationships and collaboration.</p></article>
        <article><span>03</span><h3>Create momentum</h3><p>I organize people and ideas into concrete action through strategy, content, events, partnerships, and coordinated execution.</p></article>
      </div>
    </section>

    <section className="section purpose-section"><div className="shell purpose-grid"><div><p className="eyebrow light">Purpose</p><h2>Create opportunity, then share it.</h2></div><div><p>My mission is to connect people, ideas, and opportunities and transform those connections into meaningful action. Through marketing, entrepreneurship, innovation, and global business, I want to help people and organizations recognize their potential, communicate their value, and build sustainable growth.</p><p>My long-term vision is to become a global entrepreneur and business leader who creates meaningful value, brings people together, and opens doors for others.</p><Link className="text-link light-link" href="/projects">See the work behind the story →</Link></div></div></section>

    <section className="section shell closing"><p className="eyebrow">The next connection</p><h2>Have an idea, opportunity, or project worth building?</h2><Link className="button button-accent" href="/contact">Connect with Mateo <span>→</span></Link></section>
  </>;
}

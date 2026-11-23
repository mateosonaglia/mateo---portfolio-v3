import Link from "next/link";

export default function GetalikePage() {
  return <div className="shell section">
    <p className="eyebrow">Entrepreneurship · Partnerships · Marketing</p>
    <h1>Building GETALIKE</h1>
    <p className="hero-lede">Co-Founder &amp; CEO · March 2026–Present</p>
    <div className="origin-grid section">
      <div><h2>Turning relationships into momentum.</h2></div>
      <div className="story-copy"><p>GETALIKE began with a shared ambition: help organizations turn their ideas into meaningful growth. Together with my co-founder, I work with businesses and community organizations to connect marketing strategy, storytelling, and execution.</p><p>Building a venture means listening to partners, shaping opportunities, coordinating creative work, and learning by doing. It brings together the parts of business I enjoy most: people, strategy, and action.</p></div>
    </div>
    <div className="section"><p className="eyebrow">Selected collaboration</p><h2>City Impact’s Beachfront Run</h2><p className="hero-lede">We developed a marketing strategy and content plan and created promotional videos for a fundraising event that reached more than 1,250 registrations. That event-wide result reflects the work of the broader City Impact community.</p></div>
    <div className="button-row"><a className="button button-primary" href="https://getalike.agency" target="_blank" rel="noreferrer">Visit GETALIKE</a><Link className="button button-secondary" href="/projects">All projects</Link></div>
  </div>;
}

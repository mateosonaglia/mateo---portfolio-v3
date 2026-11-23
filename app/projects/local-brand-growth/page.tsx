import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    name: "3 Amigos",
    category: "Local Dining",
    description: "Local dining feature connecting a neighborhood favorite with campus audiences.",
    image: "/images/three-amigos.png",
    link: "https://www.instagram.com/p/DXGOGH3iGDF/",
  },
  {
    name: "Carrara Pastries",
    category: "Cafés & Study Spots",
    description: "Café-style feature highlighting a local spot students can discover and revisit.",
    image: "/images/local-carrara-pastries.png",
    link: "https://www.instagram.com/reel/DZWjJhFE-ye/",
  },
  {
    name: "Five07",
    category: "Cafés & Study Spots",
    description: "Student-friendly coffee stop featured through a recognizable short-form format.",
    image: "/images/local-five07.png",
    link: "https://www.instagram.com/p/DRbWmDxgIjr/",
  },
  {
    name: "Purrlandia",
    category: "Student-Friendly Experiences",
    description: "Playful local experience framed around student life and discovery.",
    image: "/images/local-purrlandia.png",
    link: "https://www.instagram.com/p/DTcBxw4lvVh/",
  },
  {
    name: "Breakers Sports Bar & Grill",
    category: "Local Dining",
    description: "Local restaurant feature built to strengthen visibility and community connection.",
    image: "/images/local-breakers.png",
    link: "https://www.instagram.com/p/DYydKOejl1x/",
  },
  {
    name: "Ubatuba Açaí",
    category: "Cafés & Study Spots",
    description: "Bright, student-friendly feature connecting casual discovery with campus lifestyle.",
    image: "/images/local-ubatuba-acai.png",
    link: "https://www.instagram.com/p/DXTLz9AkaNI/",
  },
];

const roles = [
  {
    number: "01",
    title: "Content Strategy",
    copy: "I helped define the direction, format, and purpose behind each local business feature so the content connected with students and supported local brand visibility.",
  },
  {
    number: "02",
    title: "Creative Direction",
    copy: "I guided the visual and storytelling approach across features, helping keep the series recognizable while allowing each business to feel unique.",
  },
  {
    number: "03",
    title: "Team Execution",
    copy: "I coordinated with student team members, supported planning and editing decisions, and helped move content from idea to final execution.",
  },
];

export default function LocalGrowthPage() {
  return <div className="local-growth-page">
    <section className="case-hero local-growth-hero shell">
      <div>
        <p className="eyebrow">Case study 03 · Local growth</p>
        <h1>Community &amp; Local Brand Growth</h1>
        <p className="hero-lede">SOM-thing Local Initiative · School of Management Brand Ambassadors</p>
      </div>
      <div className="case-meta">
        <div><b>Role</b><span>Project Leader</span></div>
        <div><b>Focus</b><span>Strategy · Content · Community Engagement</span></div>
        <div><b>Scope</b><span>Local Businesses · Student-Led Teams</span></div>
      </div>
    </section>

    <section className="local-overview shell">
      <div className="local-logo-panel">
        <Image src="/images/somba-logo.jpg" alt="School of Management Brand Ambassadors logo" width={800} height={800}/>
      </div>
      <div className="story-copy">
        <p className="eyebrow">Overview</p>
        <h2>Turning local stories into campus visibility.</h2>
        <p>SOM-thing Local is a student-led initiative from SOMBA designed to connect local businesses with the university community through brand storytelling and content strategy.</p>
        <p>As Project Leader, I lead strategy development, creative direction, and cross-functional execution to build brand visibility, strengthen community relationships, and support local partners.</p>
      </div>
    </section>

    <section className="local-role-section">
      <div className="shell">
        <div className="local-section-heading">
          <p className="eyebrow">My role</p>
          <h2>From student idea to repeatable content system.</h2>
          <p>I helped shape SOM-thing Local into a recognizable content format that could be repeated across different local businesses while keeping the same goal: make local places feel more visible, approachable, and connected to student life.</p>
        </div>
        <div className="local-role-grid">
          {roles.map((role) => <article key={role.number}>
            <span>{role.number}</span>
            <h3>{role.title}</h3>
            <p>{role.copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="local-work-section">
      <div className="shell">
        <div className="local-work-heading">
          <p className="eyebrow">Selected work &amp; visuals</p>
          <h2>One recognizable content system, six local stories.</h2>
          <p>Content was produced collaboratively by the SOMBA team. My role focused on project leadership, content strategy, creative direction, and execution planning. Select pieces included my direct editing, while others were produced by team members under my direction.</p>
        </div>
        <div className="local-reel-grid">
          {campaigns.map((campaign, index) => <a className="local-reel-card" href={campaign.link} target="_blank" rel="noreferrer" key={`${campaign.name}-${index}`} aria-label={`Watch the ${campaign.name} Reel on Instagram in a new tab`}>
            <div className="local-reel-preview">
              <Image src={campaign.image} alt={`SOM-thing Local Reel thumbnail featuring ${campaign.name}`} width={900} height={1200}/>
              <span className="reel-play" aria-hidden="true">▶</span>
            </div>
            <div className="local-reel-copy">
              <p className="reel-category">{campaign.category}</p>
              <h3>{campaign.name}</h3>
              <p>{campaign.description}</p>
              <strong>Watch Reel →</strong>
            </div>
          </a>)}
        </div>
      </div>
    </section>

    <section className="local-impact-section">
      <div className="shell local-impact-layout">
        <div>
          <p className="eyebrow">Why it matters</p>
          <h2>Local stories create stronger community visibility.</h2>
        </div>
        <div className="local-impact-copy">
          <p>SOM-thing Local combined student perspective, short-form storytelling, and consistent creative direction to help local businesses connect with campus audiences through a repeatable content model.</p>
          <ul>
            <li>Created a repeatable format for local business features</li>
            <li>Strengthened connections between students and local partners</li>
            <li>Positioned SOMBA as a bridge to the local business community</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="local-closing shell">
      <p>This project reflects how content strategy can turn local relationships into visible community value.</p>
      <Link className="button button-dark" href="/projects">Back to Projects →</Link>
    </section>
  </div>;
}

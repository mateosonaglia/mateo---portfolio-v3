import Image from "next/image";
import Link from "next/link";

export default function LeadershipPage() {
  return <div className="leadership-page">
    <section className="case-hero leadership-hero shell">
      <div>
        <p className="eyebrow">Case study 02 · Leadership</p>
        <h1>Leadership &amp; Community Building</h1>
        <p className="hero-lede">American Marketing Association · California Lutheran University Chapter</p>
      </div>
      <div className="case-meta">
        <div><b>Role</b><span>Vice President → President</span></div>
        <div><b>Focus</b><span>Leadership · Events · Partnerships · Engagement</span></div>
        <div><b>Scope</b><span>Campus-Wide Programming &amp; Professional Development</span></div>
      </div>
    </section>

    <section className="leadership-mission shell">
      <div className="story-copy">
        <p className="eyebrow">The mission</p>
        <h2>Creating access to real-world professional experiences.</h2>
        <p>As President of the American Marketing Association at Cal Lutheran, I lead a student executive team focused on creating professional development experiences, strengthening campus engagement, and connecting students with brands, alumni, and industry professionals.</p>
        <p>After transitioning from Vice President to President, I have helped guide AMA’s programming, partnerships, and event execution with a focus on real-world marketing, career readiness, and community building.</p>
      </div>
      <div className="mission-visual">
        <Image src="/images/ama-logo.png" alt="American Marketing Association logo" width={1024} height={1024}/>
      </div>
    </section>

    <section className="progression-section leadership-progression">
      <div className="shell">
        <div className="chapter-heading">
          <p className="eyebrow">Leadership progression</p>
          <h2>From Vice President to President</h2>
          <p>Growing from event support to leading a student team, building partnerships, and shaping campus-wide professional experiences.</p>
        </div>
        <div className="progression-grid">
          <article>
            <span>January 2026–Present</span>
            <h3>President</h3>
            <ul>
              <li>Lead a student executive team in planning and executing campus-wide AMA initiatives</li>
              <li>Coordinate timelines, logistics, promotion, and stakeholder communication</li>
              <li>Oversee partnerships, brand presence, and professional development programming</li>
              <li>Led AMA’s most ambitious event since its campus relaunch</li>
            </ul>
          </article>
          <article>
            <span>May–December 2025</span>
            <h3>Vice President</h3>
            <ul>
              <li>Supported events, guest speakers, and campus programming</li>
              <li>Collaborated with the executive board on event concepts, partnerships, and engagement strategy</li>
              <li>Contributed to member growth, internal operations, and event execution</li>
              <li>Helped strengthen AMA&apos;s presence during its relaunch phase</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section className="featured-events-section">
      <div className="shell featured-events-intro">
        <p className="eyebrow">Featured events &amp; campaigns</p>
        <h2>Building bridges to professional opportunity</h2>
        <p>Selected initiatives that connected students with brands, alumni, leaders, and professional opportunities.</p>
      </div>

      <article className="featured-event shell">
        <div className="featured-event-heading"><p className="eyebrow">Career exploration · October 2026</p><h2>New York City Career Trip</h2><p>President · Trip Lead · Relationship Building</p></div>
        <div className="story-copy"><h3>Opening doors beyond campus</h3><p>I initiated and led a career trip connecting AMA members with professionals at five organizations: Hightouch, Ogilvy, Google, the NFL, and Chubb. I coordinated outreach, logistics, member preparation, and on-site execution with university and industry partners.</p><p>The trip brought students into conversations about marketing, business, and career paths—and put relationship building at the center of the experience.</p></div>
      </article>
      <article className="featured-event shell">
        <div className="featured-event-heading"><p className="eyebrow">Fireside chat · November 2026</p><h2>Lessons from the Marketing C-Suite</h2><p>President · Event Host · Moderator</p></div>
        <div className="story-copy"><p>I moderated a conversation with former CMO Alan Cohen, working with our executive team and university partners to bring an experienced marketing leader’s perspective to students.</p></div>
      </article>

      <article className="featured-event shell">
        <div className="featured-event-heading">
          <p className="eyebrow">Featured event · January 29, 2026</p>
          <h2>AMA × Cheesecake Factory Creator Challenge</h2>
          <p>President · Event Lead · Executive Team Coordinator</p>
        </div>
        <div className="featured-event-layout">
          <div className="creator-gallery">
            <Image className="creator-main" src="/images/creator-challenge.jpg" alt="Students, AMA leaders, and Cheesecake Factory guests at the Creator Challenge" width={1200} height={900}/>
            <Image src="/images/community-event.jpg" alt="Mateo presenting at the Creator Challenge" width={1200} height={900}/>
            <Image src="/images/ama-event.jpg" alt="Students participating in the Creator Challenge" width={1200} height={900}/>
          </div>
          <div className="featured-event-copy">
            <div className="story-copy">
              <h3>A professional brief became a shared learning experience</h3>
              <p>This flagship event marked the most ambitious initiative hosted by AMA since its relaunch. In partnership with The Cheesecake Factory&apos;s marketing team, students developed and pitched campaign concepts for the Bowls &amp; Bites Menu to Gen Z audiences.</p>
              <p>I led more than one month of event strategy and planning, coordinating the executive team, university stakeholders, and brand partners. As host and facilitator, I framed the challenge for students and brand leaders before five teams presented directly to the company&apos;s CMO and senior marketing leaders.</p>
            </div>
            <div className="impact-card">
              <h3>Event impact</h3>
              <ul>
                <li>Strong student turnout, including attendance by the Dean of the School of Management</li>
                <li>Positive feedback from brand leaders on the creativity and strategic depth of student pitches</li>
                <li>Winning team selected to continue developing its concept with the brand</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="strategic-takeaway event-section-takeaway">This event set the strategic direction for my presidency, establishing AMA at Cal Lutheran as a platform for real-world, brand-driven learning experiences.</p>
      </article>

      <article className="featured-event featured-event-secondary shell">
        <div className="featured-event-heading">
          <p className="eyebrow">Professional development · March 26, 2026</p>
          <h2>Life After CLU Alumni Career Panel</h2>
          <p>President · Event Lead · Co-Moderator</p>
        </div>
        <div className="panel-event-layout">
          <Image src="/images/leadership.jpg" alt="Life After CLU alumni career panel" width={1200} height={900}/>
          <div className="story-copy">
            <h3>Relatable perspective for the transition after college</h3>
            <p>Four alumni returned to campus to share honest, practical stories about career transitions across marketing, sales, account management, and partnerships. I led speaker outreach, event coordination, and co-moderation while working with the executive team to create a conversation that felt useful, relatable, and career-focused.</p>
            <p>Approximately 30 students gained direct advice, new alumni connections, and a clearer view of possible career paths after graduation.</p>
            <p className="panel-impact"><b>Impact:</b> Four alumni speakers and approximately 30 students connected through practical advice, professional storytelling, and career guidance.</p>
          </div>
        </div>
        <p className="strategic-takeaway event-section-takeaway">This event reinforced AMA’s role in helping students bridge the gap between college and career through alumni mentorship, professional storytelling, and practical career guidance.</p>
      </article>
    </section>

    <section className="leadership-highlights-section">
      <div className="shell">
        <div className="chapter-heading highlights-heading">
          <p className="eyebrow">Additional leadership highlights</p>
          <h2>Extending professional access through connection</h2>
        </div>
        <div className="leadership-highlights-grid">
          <article className="leadership-highlight-card">
            <Image src="/images/networking-event-2.png" alt="Students and professionals connecting at Matthew's Leadership Forum collaboration" width={1834} height={1016}/>
            <div>
              <p className="highlight-date">April 23, 2026</p>
              <h3>Matthew&apos;s Leadership Forum Collaboration</h3>
              <p className="highlight-role">President · Student Engagement &amp; Promotion Lead</p>
              <p>In collaboration with Student Senate and Matthew&apos;s Leadership Forum, this campus-wide event connected students with professionals across multiple industries for open networking, mentorship, leadership development, and career exploration. I supported student promotion, professional outreach, and event-day coordination with the executive team.</p>
              <p className="highlight-impact"><b>Impact:</b> Helped drive turnout of 50+ students and 25 professionals while expanding student access to professional relationships.</p>
            </div>
          </article>
          <article className="leadership-highlight-card">
            <Image src="/images/ama-community.jpg" alt="AMA Marketing Masterclass attendees" width={1170} height={869}/>
            <div>
              <p className="highlight-date">November 6, 2025</p>
              <h3>AMA Marketing Masterclass: Agency vs. In-House Marketing</h3>
              <p className="highlight-role">Vice President · Event Support &amp; Planning</p>
              <p>This guest speaker event brought Josh Rosen, Founder of TRG Sports &amp; Entertainment, to campus to share insight across sports marketing, brand partnerships, the creator economy, and entrepreneurship. As Vice President, I supported planning and event execution with the AMA executive team.</p>
              <p className="highlight-impact"><b>Impact:</b> Helped students explore agency, in-house, and creator-led marketing career paths through industry perspective.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="leadership-closing shell">
      <p className="eyebrow">The takeaway</p>
      <h2>Leadership is strongest when it creates access for others.</h2>
      <p>Through AMA, I have focused on leading with and through a team, turning relationships, partnerships, and ideas into real experiences that help students grow professionally, connect with others, and see new possibilities for their future.</p>
      <div className="button-row">
        <Link className="button button-dark" href="/projects">View More Projects →</Link>
        <Link className="text-link" href="/contact">Connect with Mateo →</Link>
      </div>
    </section>
  </div>;
}

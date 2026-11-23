const experience = [
  {
    dates: "2025–2026",
    org: "The Cheesecake Factory Bakery",
    role: "International Sales, Marketing & Business Development Intern",
    summary: "Supported international sales and marketing initiatives through market research, customer materials, and collaboration across teams.",
    points: ["Researched international markets and supported sales and business development projects", "Developed an international LinkedIn strategy and presented recommendations to senior marketing leadership", "Coordinated customer-facing materials and supported cross-functional projects"],
  },
  {
    dates: "March 2026 to Present",
    org: "GETALIKE",
    role: "Co-Founder & CEO",
    summary: "Building a marketing venture that helps organizations connect strategy, storytelling, and execution.",
    points: ["Developed the marketing strategy and content plan for City Impact’s Beachfront Run, an event that reached more than 1,250 registrations", "Build relationships with community partners and coordinate content and project delivery"],
  },
  {
    dates: "December 2025 to Present",
    org: "American Marketing Association, California Lutheran University",
    role: "President",
    summary: "Lead an executive team and build experiences that connect students with industry professionals and new career possibilities.",
    points: ["Initiated and led a New York career trip with visits to Google, the NFL, Hightouch, Ogilvy, and Chubb", "Coordinate professional outreach, events, communications, and partnerships"],
  },
  {
    dates: "September 2025 to Present",
    org: "SOM-thing Local, School of Management Brand Ambassadors",
    role: "Project Leader",
    summary: "Connect local businesses with the university community through student-led storytelling and digital campaigns.",
    points: ["Coordinate business partnerships, content production, and a team of student ambassadors", "Guide storytelling and creative execution for local business features"],
  },
];

const additionalExperience = [
  {
    org: "Media 43",
    role: "Social Media Marketing Intern",
    summary: "Supported content creation, digital storytelling, and social media execution to strengthen brand visibility and audience engagement.",
  },
  {
    org: "California Lutheran University Admissions",
    role: "Undergraduate Recruitment Intern",
    summary: "Represented Cal Lutheran through student outreach, campus tours, and admissions support, helping 12+ prospective students commit to CLU.",
  },
];

const skills = [
  {title:"Strategy & Analysis", text:"Market Research · GTM Strategy · Pricing & Portfolio Strategy · Brand Positioning · Market Analysis"},
  {title:"Digital Marketing & Content", text:"Content Strategy · Social Media Strategy · Brand Storytelling · Community Engagement · Digital Campaign Planning"},
  {title:"Leadership & Project Management", text:"Project Leadership · Team Coordination · Cross-Functional Collaboration · Initiative Development · Event & Community Activation"},
  {title:"Tools & Platforms", text:"Adobe Photoshop · Adobe Premiere · Canva · Wix · Meta Business Suite · Google Workspace · Microsoft Office · Analytics Reporting"},
];

export default function ResumePage() {
  return <>
    <section className="page-hero resume-hero shell">
      <p className="eyebrow">Resume snapshot</p>
      <h1>Experience Snapshot</h1>
      <p className="resume-subtitle">Partnerships · Sales · Marketing · Business Development</p>
      
    </section>

    <section className="resume-section resume-experience-section shell">
      <div className="resume-section-heading">
        <p className="eyebrow">Selected experience</p>
        <h2>Work Experience</h2>
        <p>A curated view of my most relevant international, leadership, and community-focused work.</p>
      </div>
      <div className="experience-cards">
        {experience.map((item, index) => <article className={index === 0 ? "experience-card experience-current" : "experience-card"} key={`${item.org}-${item.dates}`}>
          <div className="experience-card-top">
            <time>{item.dates}</time>
            {index === 0 && <span>Current focus</span>}
          </div>
          <p className="experience-org">{item.org}</p>
          <h3>{item.role}</h3>
          <p className="experience-summary">{item.summary}</p>
          <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="resume-section additional-experience-section shell">
      <div className="resume-section-heading">
        <p className="eyebrow">Broader experience</p>
        <h2>Additional Experience</h2>
      </div>
      <div className="additional-experience-grid">
        {additionalExperience.map((item) => <article key={item.role}>
          <p>{item.org}</p>
          <h3>{item.role}</h3>
          <span className="additional-summary">{item.summary}</span>
        </article>)}
      </div>
    </section>

    <section className="resume-section education-section shell">
      <div className="resume-section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic Foundation</h2>
      </div>
      <div className="education-content-stack">
        <article className="education-card education-card-expanded">
          <div className="education-card-top">
            <time>January 2023 to Present · Expected Graduation December 2026</time>
            <div><span>GPA</span><strong>3.85</strong></div>
          </div>
          <p>California Lutheran University</p>
          <h3>Bachelor of Science in Business Administration</h3>
          <div className="education-detail-grid">
            <div>
              <span className="detail-label">Academic focus</span>
              <p>Emphases in Marketing and Global Business</p>
              <p>Minor in Innovation and Entrepreneurship</p>
            </div>
            <div>
              <span className="detail-label">Relevant coursework</span>
              <p>Social Media Analytics, Global Business, Marketing, and Economics courses</p>
            </div>
          </div>
          <div className="education-highlights">
            <div><span>Student Athlete</span><strong>Men&apos;s Tennis Team</strong></div>
            <div><span>Academic Recognition</span><strong>Dean&apos;s List · Department Distinction</strong></div>
          </div>
        </article>
        <article className="academic-experience-card eia-academic-card">
          <div>
            <p>International innovation experience</p>
            <h3>European Innovation Academy</h3>
          </div>
          <time>London · July 2026</time>
          <p>Participating in an intensive international innovation program, collaborating across cultures while applying entrepreneurship, customer discovery, and venture development.</p>
        </article>
        <article className="academic-experience-card study-abroad-card">
          <div>
            <p>Independent international experience</p>
            <h3>Study Abroad · Magdeburg, Germany</h3>
          </div>
          <time>March 2022 to December 2022</time>
          <p>Completed an external study abroad experience before enrolling at Cal Lutheran, strengthening cross-cultural adaptability and global perspective.</p>
        </article>
      </div>
    </section>

    <section className="resume-section skills-section shell">
      <div className="resume-section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>Skills &amp; Expertise</h2>
      </div>
      <div className="skill-groups">
        {skills.map((skill, index) => <article className={`skill-card skill-card-${index + 1}`} key={skill.title}>
          <span>0{index + 1}</span>
          <h3>{skill.title}</h3>
          <p>{skill.text}</p>
        </article>)}
      </div>
    </section>
  </>;
}

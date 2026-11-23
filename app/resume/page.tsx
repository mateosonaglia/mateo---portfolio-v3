const experience = [
  {
    dates: "January 2026–Present",
    org: "American Marketing Association, California Lutheran University",
    role: "President",
    summary: "Lead a student executive team, direct chapter programming, and build relationships with brands, alumni, and university partners to expand students’ access to industry experience.",
    points: ["Initiated and led a New York career trip with visits to Google, the NFL, Hightouch, Ogilvy, and Chubb, coordinating outreach, logistics, and student preparation", "Led the AMA × Cheesecake Factory Creator Challenge, bringing student teams together to present campaign concepts to the company’s CMO and senior marketing leaders", "Organized and moderated Lessons from the Marketing C-Suite with former CMO Alan Cohen", "Oversee executive team coordination, event strategy, promotion, and professional partnerships"],
  },
  {
    dates: "Summer 2026–November 2026",
    org: "The Cheesecake Factory Bakery",
    role: "International Sales, Marketing & Business Development",
    summary: "Worked with the international team on order processes, marketing strategy, market research, and sales materials.",
    points: ["Created an order-processing workflow and presented it to the team manager", "Developed an international marketing and LinkedIn strategy, presenting recommendations to marketing leadership", "Researched international markets, competitors, and product positioning to support business development", "Prepared customer-facing materials and coordinated work across teams"],
  },
  {
    dates: "March 2026–Present",
    org: "GETALIKE",
    role: "Co-Founder & CEO",
    summary: "Co-founded a marketing business serving local organizations through strategy, video content, and community partnerships.",
    points: ["Developed the marketing strategy and content plan for City Impact’s Beachfront Run, an event that reached more than 1,250 registrations", "Build client relationships, develop proposals, and coordinate creative production and project delivery"],
  },
  {
    dates: "November 2026–Present",
    org: "Apple",
    role: "Sales Specialist",
    summary: "Develop customer relationships through personalized conversations and product guidance in Apple Retail.",
    points: ["Engage customers to understand their needs and help them explore relevant solutions", "Collaborate with store colleagues to deliver a welcoming customer experience"],
  },
  {
    dates: "September 2025–Present",
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
        <h2>Leadership &amp; Work Experience</h2>
        <p>Experience across team leadership, marketing, sales, and entrepreneurship.</p>
      </div>
      <div className="experience-cards">
        {experience.map((item, index) => <article className={index === 0 ? "experience-card experience-current" : "experience-card"} key={`${item.org}-${item.dates}`}>
          <div className="experience-card-top">
            <time>{item.dates}</time>
            {index === 0 && <span>Chapter leadership</span>}
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
          <p>Participated in an intensive international innovation program, collaborating across cultures while applying entrepreneurship, customer discovery, and venture development.</p>
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

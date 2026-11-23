import Image from "next/image";
import Link from "next/link";

export default function InternationalPage() {
  return <>
    <section className="case-hero shell">
      <div>
        <p className="eyebrow">Case study 01 · Global markets</p>
        <h1>International Marketing Strategy</h1>
        <p className="hero-lede">The Cheesecake Factory Bakery</p>
      </div>
      <div className="case-meta">
        <div><b>Role</b><span>International Sales, Marketing &amp; Business Development Intern</span></div>
        <div><b>Company</b><span>The Cheesecake Factory Bakery</span></div>
        <div><b>Scope</b><span>Summer 2025 · Summer 2026</span></div>
        <div><b>Current Focus</b><span>Sales support · Customer communication · Cross-functional collaboration · Market-facing materials</span></div>
        <div><b>Foundation</b><span>International market research · Product and pricing strategy · Competitive analysis · LinkedIn strategy</span></div>
      </div>
    </section>

    <section className="case-overview shell">
      <div className="story-copy">
        <p className="eyebrow">Overview</p>
        <h2>From market insight to international sales execution.</h2>
        <p>During Summer 2025, I had an amazing first experience at The Cheesecake Factory Bakery, where I supported international sales, marketing, and business development initiatives connected to global expansion. That first summer gave me the opportunity to build a strong foundation in market research, competitive analysis, product and pricing strategy, and early digital brand planning.</p>
        <p>I am now currently working with the team again during Summer 2026, building on what I learned and developed last summer. This time, my role is expanding further into the commercial side of the business, including sales support, customer communication, market-facing materials, and collaboration across different departments.</p>
        <p>This project highlights the evolution of my experience from analyzing global market opportunities to understanding how international strategy connects with customer conversations, sales execution, and cross-functional business operations.</p>
        <p className="confidentiality">Certain details have been omitted or adapted due to confidentiality. Frameworks shown are conceptual and exclude internal data, exact pricing, unreleased strategy, customer-specific information, and region-specific commercial details.</p>
      </div>
      <Image className="overview-photo" src="/images/cheesecake-overview.jpg" alt="Mateo standing in front of The Cheesecake Factory restaurant entrance" width={1039} height={1800}/>
    </section>

    <section className="story-chapter alt">
      <div className="shell">
        <div className="chapter-heading"><p className="eyebrow">Chapter 01 · Understand</p><h2>Market and Competitive Research</h2></div>
        <div className="story-split">
          <Image src="/images/market-analysis.png" alt="Conceptual competitive positioning framework" width={1970} height={1122}/>
          <div className="story-copy"><h3>Finding the opportunity inside the complexity</h3><p>I conducted market and competitor research across multiple international regions to identify positioning opportunities, pricing differences, and market gaps that informed strategic recommendations for global expansion.</p><p>The anonymized matrix shows the type of positioning logic used without disclosing brands, markets, or internal commercial information.</p></div>
        </div>
        <p className="chapter-outcome"><b>Outcome:</b> Identified positioning gaps and informed expansion choices across priority regions.</p>
      </div>
    </section>

    <section className="story-chapter">
      <div className="shell">
        <div className="chapter-heading"><p className="eyebrow">Chapter 02 · Shape</p><h2>Product and Pricing Strategy</h2></div>
        <div className="story-split reverse">
          <div className="story-copy"><h3>Connecting format, value, and market expectations</h3><p>Pricing strategy varied by product format, requiring a balance between premium positioning and perceived value across international markets. Product size and format insights informed portfolio structuring and scalable global pricing alignment.</p><p>The framework communicates the strategic relationship between formats without revealing exact product specifications or prices.</p></div>
          <Image src="/images/pricing-strategy.png" alt="International pricing considerations by product format" width={1536} height={1024}/>
        </div>
        <p className="chapter-outcome"><b>Outcome:</b> Supported portfolio planning and pricing alignment across international formats.</p>
      </div>
    </section>

    <section className="story-chapter alt">
      <div className="shell">
        <div className="chapter-heading"><p className="eyebrow">Chapter 03 · Communicate</p><h2>International Go-To-Market &amp; LinkedIn Strategy</h2></div>
        <div className="story-split">
          <Image src="/images/linkedin-framework.png" alt="Conceptual LinkedIn content framework" width={1536} height={1024}/>
          <div className="story-copy"><h3>Building credibility before asking for attention</h3><p>Digital channels were evaluated as key touchpoints for building brand credibility and awareness across international markets. I developed strategic concepts and content frameworks to explore how LinkedIn could support long-term brand positioning and market entry objectives.</p><p>Execution was outside the project timeline, but the work established a strategic foundation for future digital activation.</p></div>
        </div>
        <p className="chapter-outcome"><b>Outcome:</b> Defined a scalable digital content framework to support long-term brand positioning.</p>
        <Link className="button button-dark chapter-link" href="/projects">Back to projects →</Link>
      </div>
    </section>
  </>;
}

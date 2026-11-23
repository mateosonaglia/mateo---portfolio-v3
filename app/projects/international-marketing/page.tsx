import Image from "next/image";
import Link from "next/link";

export default function InternationalPage() {
  return <>
    <section className="case-hero shell">
      <div>
        <p className="eyebrow">Case study 01 · Global markets</p>
        <h1>International Marketing &amp; Sales Operations</h1>
        <p className="hero-lede">The Cheesecake Factory Bakery</p>
      </div>
      <div className="case-meta">
        <div><b>Team</b><span>International Sales, Marketing &amp; Business Development</span></div>
        <div><b>Company</b><span>The Cheesecake Factory Bakery</span></div>
        <div><b>Scope</b><span>Summer 2026–November 2026</span></div>
        <div><b>Focus</b><span>Order-process workflow · Marketing strategy · Cross-functional collaboration</span></div>
        <div><b>Foundation</b><span>International market research · Product and pricing strategy · Competitive analysis · LinkedIn strategy</span></div>
      </div>
    </section>

    <section className="case-overview shell">
      <div className="story-copy">
        <p className="eyebrow">Overview</p>
        <h2>From market insight to international sales execution.</h2>
        <p>From summer through November 2026, work with The Cheesecake Factory Bakery’s International Sales, Marketing &amp; Business Development team covered market research, marketing strategy, customer materials, and order processes.</p>
        <p>Two key projects were creating an order-processing workflow and presenting it to the team manager, and developing an international marketing strategy, including recommendations for LinkedIn. Together, these projects offered experience in both how a brand reaches international audiences and how the team organizes the work behind sales.</p>
        <p className="confidentiality">Certain details have been omitted or adapted due to confidentiality. Frameworks shown are conceptual and exclude internal data, exact pricing, unreleased strategy, customer-specific information, and region-specific commercial details.</p>
      </div>
      <Image className="overview-photo" src="/images/cheesecake-overview.jpg" alt="Mateo standing in front of The Cheesecake Factory restaurant entrance" width={1039} height={1800}/>
    </section>

    <section className="case-section">
      <div className="shell">
        <div><p className="eyebrow">Sales operations</p><h2>Order-Processing Workflow</h2></div>
        <div className="case-body"><p>Created an order-processing workflow and presented it to the team manager, bringing the process into a format that could be reviewed and discussed.</p><p>This work complemented the marketing projects with a closer look at the operational side of international sales.</p><div className="outcome">Deliverable: An order-processing workflow presented for management review.</div></div>
      </div>
    </section>

    <section className="story-chapter alt">
      <div className="shell">
        <div className="chapter-heading"><p className="eyebrow">Chapter 01 · Understand</p><h2>Market and Competitive Research</h2></div>
        <div className="story-split">
          <Image src="/images/market-analysis.png" alt="Conceptual competitive positioning framework" width={1970} height={1122}/>
          <div className="story-copy"><h3>Finding the opportunity inside the complexity</h3><p>Market and competitor research across international regions identified positioning opportunities, pricing differences, and market gaps to inform strategic recommendations.</p><p>The anonymized matrix shows the type of positioning logic used without disclosing brands, markets, or internal commercial information.</p></div>
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
          <div className="story-copy"><h3>Building credibility before asking for attention</h3><p>Digital channels were evaluated as key touchpoints for building brand credibility and awareness across international markets. The marketing strategy included concepts and content frameworks exploring how LinkedIn could support brand positioning and market entry objectives. Recommendations were presented to marketing leadership.</p><p>Execution was outside the project timeline, but the work established a strategic foundation for future digital activation.</p></div>
        </div>
        <p className="chapter-outcome"><b>Outcome:</b> Defined a scalable digital content framework to support long-term brand positioning.</p>
        <Link className="button button-dark chapter-link" href="/projects">Back to projects →</Link>
      </div>
    </section>
  </>;
}

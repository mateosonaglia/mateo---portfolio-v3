import Image from "next/image";
import Link from "next/link";

const projects = [
  {href:"/projects/getalike",number:"01",title:"Building GETALIKE",organization:"Co-Founder & CEO",description:"Building a marketing venture through community partnerships, strategy, and storytelling—from local businesses to City Impact’s Beachfront Run.",tags:["Entrepreneurship","Partnerships","Marketing"],image:"/images/community-event.jpg",alt:"Community event and collaboration",cta:"Explore the project"},
  {href:"/projects/international-marketing",number:"02",title:"International Marketing Strategy",organization:"The Cheesecake Factory Bakery",description:"A global strategy case study exploring how market insight, product positioning, pricing, and digital go-to-market thinking can support international brand growth.",tags:["Global Markets","Strategy & Research","Internship Project"],image:"/images/cheesecake-project.png",alt:"Conceptual international market strategy frameworks",cta:"View Case Study"},
  {href:"/projects/leadership",number:"03",title:"Leadership & Community Building",organization:"American Marketing Association, California Lutheran University Chapter",description:"A leadership story about rebuilding momentum, creating high-impact student experiences, and connecting students with brands, alumni, and professionals.",tags:["Leadership","Community Building","Event Strategy"],image:"/images/creator-challenge.jpg",alt:"Students and marketing leaders at an American Marketing Association event",cta:"View Leadership Project"},
  {href:"/projects/local-brand-growth",number:"04",title:"Community & Local Brand Growth",organization:"SOM-thing Local Initiative, SOMBA",description:"A student-led content initiative designed to spotlight local businesses, strengthen campus-community relationships, and turn storytelling into visibility.",tags:["Local Branding","Content Strategy","Partnerships & Community"],image:"/images/som-local.png",alt:"Curated SOM-thing Local campaign previews",cta:"View Project"},
];

export default function ProjectsPage() {
  return <>
    <section className="page-hero shell projects-intro"><p className="eyebrow">Selected projects</p><h1>Selected work across markets, leadership, and growth.</h1><p className="lede">Selected stories across entrepreneurship, international marketing, campus leadership, and community brand growth. Each project reflects how I connect people, strategy, and execution to create meaningful outcomes.</p></section>
    <section className="projects-list shell">{projects.map((project) => <Link className="project-row" href={project.href} key={project.href}><div className="project-row-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="project-row-copy"><p className="project-number">Project {project.number}</p><h2>{project.title}</h2><p className="project-organization">{project.organization}</p><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-cta">{project.cta} →</span></div></Link>)}</section>
  </>;
}

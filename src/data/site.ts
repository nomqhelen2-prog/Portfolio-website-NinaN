import oncueMarketingImage from "@/assets/projects/oncue-marketing.webp";
import theDrinksMastersImage from "@/assets/projects/the-drinks-masters-sa.webp";
import pipePioneersImage from "@/assets/projects/pipe-pioneers-infra.webp";
import mthunziImage from "@/assets/projects/mthunzi-project-consultants.webp";

// The two full-stack tracks worked across so far — timelined in the
// Experience section. The mobile entry gets its live project link added
// once the church app ships; until then it's flagged "In Development".
export const experience = [
  {
    title: "Full Stack Web Developer",
    status: "Ongoing",
    body: "Designing and building complete web experiences end to end, from React and TypeScript front ends to Node.js-backed features, shipped for real clients.",
    tools: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Full Stack Mobile App Developer",
    status: "In Development",
    body: "Building a mobile app for my church community, covering both the interface and the backend. Coming soon, once it's deployed.",
    tools: ["Flutter", "Java"],
  },
];

export const services = [
  {
    index: "01",
    title: "Frontend & UI Development",
    body: "Responsive, mobile-first interfaces built with React, TypeScript and modern CSS, considered at every screen size.",
    tools: ["React", "TypeScript", "Tailwind"],
  },
  {
    index: "02",
    title: "Landing Pages & Portfolios",
    body: "High-impact, conversion-focused sites tuned for fast loading speeds and effortless engagement.",
    tools: ["Vite", "SEO", "Performance"],
  },
  {
    index: "03",
    title: "Dynamic Web Applications",
    body: "Interactive projects, client prototypes and custom digital tools, from agency deliverables to specialised platforms.",
    tools: ["Node.js", "APIs", "State"],
  },
  {
    index: "04",
    title: "Version Control & Deployment",
    body: "Repositories managed with Git and reliable, seamless releases through modern hosting platforms.",
    tools: ["Git", "GitHub", "Vercel"],
  },
];

// Live, shipped client sites. `url` is the deployed site so visitors can click
// through and see the real, working project — not a mockup.
export const projects = [
  {
    index: "Project 01",
    title: "OnCue Marketing",
    role: "Design & Build",
    body: "A marketing site for an experiential and promotional marketing agency: brand activations, product launches and promotional staffing across South Africa.",
    stack: ["React", "Vite", "Tailwind"],
    url: "https://oncuemarketing.co.za",
    image: oncueMarketingImage,
  },
  {
    index: "Project 02",
    title: "The Drinks Masters SA",
    role: "Design & Build",
    body: "A site for a luxury mobile bar company: signature cocktails, premium coffee bars and bespoke beverage activations for weddings, corporate events and brand launches.",
    stack: ["React", "Vite", "Tailwind"],
    url: "https://thedrinksmasterssa.co.za",
    image: theDrinksMastersImage,
  },
  {
    index: "Project 03",
    title: "Pipe Pioneers Infra",
    role: "Design & Build",
    body: "A site for a piping and infrastructure services company, built to present their project capabilities clearly to prospective clients.",
    stack: ["React", "Vite", "Tailwind"],
    url: "https://pipepioneersinfra.com",
    image: pipePioneersImage,
  },
  {
    index: "Project 04",
    title: "Mthunzi Project Consultants",
    role: "Design & Build",
    body: "A site for a construction project management firm, protecting client interests through expert oversight of every build.",
    stack: ["React", "Vite", "Tailwind"],
    url: "https://mthunziprojectconsultants.com",
    image: mthunziImage,
  },
];

export const stack = [
  { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3, Python" },
  { label: "Frameworks", value: "React, Vite, Node.js" },
  { label: "Workflow", value: "Git, cross-browser testing, responsive QA" },
  { label: "Principles", value: "Responsive design, accessibility, clean code" },
];

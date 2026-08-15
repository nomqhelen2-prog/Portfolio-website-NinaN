import workOne from "@/assets/work-one.jpg";
import workTwo from "@/assets/work-two.jpg";
import workThree from "@/assets/work-three.jpg";

export const services = [
  {
    index: "01",
    title: "Frontend & UI Development",
    body: "Responsive, mobile-first interfaces built with React, TypeScript and modern CSS — considered at every screen size.",
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
    body: "Interactive projects, client prototypes and custom digital tools — from agency deliverables to specialised platforms.",
    tools: ["Node.js", "APIs", "State"],
  },
  {
    index: "04",
    title: "Version Control & Deployment",
    body: "Repositories managed with Git and reliable, seamless releases through modern hosting platforms.",
    tools: ["Git", "GitHub", "Vercel"],
  },
];

export const projects = [
  {
    index: "Project 01",
    title: "Aurelia Studio",
    role: "Design & Build",
    body: "A brand-led marketing site for a boutique design studio, with an editorial layout and sub-second first paint.",
    stack: ["React", "Vite", "Tailwind"],
    image: workOne,
  },
  {
    index: "Project 02",
    title: "Atelier Commerce",
    role: "Frontend Lead",
    body: "A mobile-first shopping experience with a curated browsing flow and an accessible, touch-friendly interface.",
    stack: ["TypeScript", "React", "REST"],
    image: workTwo,
  },
  {
    index: "Project 03",
    title: "Insight Dashboard",
    role: "Full Build",
    body: "A reporting dashboard translating dense analytics into calm, legible visuals for non-technical teams.",
    stack: ["React", "Charts", "Node.js"],
    image: workThree,
  },
];

export const stack = [
  { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3, Python" },
  { label: "Frameworks", value: "React, Vite, Node.js" },
  { label: "Workflow", value: "Git, GitHub, Vercel, cross-browser testing" },
  { label: "Principles", value: "Responsive design, accessibility, clean code" },
];
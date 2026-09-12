import { useState } from "react";

const ACCENT = "#c98a1c";
const BG     = "#eeece4";
const TEXT   = "#1f1d16";
const DIM    = "#655f4d";
const MUTED  = "#847d68";
const BORDER = "#d8d4c4";
const SURFACE = "#f8f7f1";

const PROJECTS = [
  {
    id: "01",
    name: "AI Engineer — GenAI",
    stack: ["RAG", "Vector Databases", "AWS Bedrock", "LangChain"],
    desc: "Designed a RAG-based intelligent document processing pipeline extracting structured data from complex, multimodal content, including handwritten inputs. Integrated LangChain with vector databases for semantic search, and built multi-agent POCs (LangGraph, LlamaIndex, CrewAI) to orchestrate multi-step reasoning across autonomous workflows.",
    link: "#",
  },
  {
    id: "02",
    name: "Site Reliability Engineer",
    stack: ["Kubernetes", "Docker", "Terraform", "CI/CD", "Monitoring/Observability"],
    desc: "Designed and scaled an event-driven microservices orchestration workflow processing 1.5M+ events daily for insurance customers. Built CI/CD pipelines (GitHub Actions, ArgoCD, Docker, ECR) and an observability and auto-scaling stack (ELK, Prometheus, HPA, Karpenter, CloudWatch, AWS X-Ray), while leading on-call rotations and incident response.",
    link: "#",
  },
  {
    id: "03",
    name: "Big Data & Data Engineering",
    stack: ["Data Lake", "AWS", "Hadoop", "Spark", "Streaming", "Data Governance"],
    desc: "Migrated legacy ETL to Kafka-based streaming pipelines to power real-time AI, and built a 50TB+ hybrid data lake (AWS + on-prem) for AI/ML training datasets. Drove data governance through catalog evaluations and CCPA-compliant PII sanitization.",
    link: "#",
  },
];

const STACK = [
  "Python", "SQL", "LangChain", "AWS Bedrock",
  "Kubernetes", "Kafka", "Spark", "Docker",
  "Terraform", "ArgoCD", "GitHub Actions", "Prometheus",
];

const CERTIFICATIONS = [
  "AWS Certified Data Analytics – Specialty",
  "AWS Certified Solutions Architect",
];

function Nav() {
  return (
    <nav style={{ borderBottom: `1px solid ${BORDER}`, background: `${BG}e6` }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur">
      <div className="max-w-5xl px-4 flex items-center justify-between h-14">
        <span style={{ color: ACCENT }} className="text-sm font-bold tracking-widest uppercase">
          VB
        </span>
        <div className="flex gap-8 text-xs tracking-widest uppercase" style={{ color: DIM }}>
          {["work", "about", "contact"].map((s) => (
            <a key={s} href={`#${s}`}
              style={{ color: "inherit", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
              onMouseLeave={e => (e.currentTarget.style.color = DIM)}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-4 max-w-5xl">
      <div className="mb-6 text-xs tracking-[0.3em] uppercase" style={{ color: DIM }}>
        Software Engineer — Systems &amp; Infrastructure
      </div>
      <h1 className="font-bold leading-[0.9] tracking-tight mb-8"
        style={{ fontSize: "clamp(2.8rem,8vw,6rem)", color: TEXT }}>
        Vasundhra<br />
        <span style={{ color: ACCENT }}>Batra.</span>
      </h1>
      <p className="max-w-xl text-sm leading-relaxed mb-12" style={{ color: DIM }}>
        I build reliable, high-throughput systems at the intersection of
        distributed computing and developer tooling. Currently open to senior
        and staff engineering roles.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-3 transition-colors duration-150"
          style={{ background: ACCENT, color: "#0a0a0a", textDecoration: "none" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
          View Work <span className="text-base leading-none">↓</span>
        </a>
        <a
          href="#contact"
          className="text-xs uppercase tracking-widest transition-colors"
          style={{ color: DIM, textDecoration: "none" }}
          onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
          onMouseLeave={e => (e.currentTarget.style.color = DIM)}
        >
          Get in touch →
        </a>
      </div>
      <div className="mt-24 pt-6 flex gap-12" style={{ borderTop: `1px solid ${BORDER}` }}>
        {[["9+", "Years"], ["12", "Projects"]].map(([num, label]) => (
          <div key={label}>
            <div className="text-2xl font-bold" style={{ color: TEXT }}>{num}</div>
            <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: DIM }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-4 max-w-5xl">
      <div className="flex items-baseline gap-4 mb-16">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: ACCENT }}>01</span>
        <h2 className="text-2xl font-bold tracking-tight" style={{ color: TEXT }}>Work Experience</h2>
      </div>

      <div>
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.link}
            className="group block py-8 transition-colors duration-150"
            style={{ borderTop: `1px solid ${BORDER}`, textDecoration: "none" }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-xs font-bold tracking-widest transition-colors duration-150"
                    style={{ color: hovered === p.id ? ACCENT : MUTED }}>
                    {p.id}
                  </span>
                  <h3 className="text-lg font-bold transition-colors duration-150"
                    style={{ color: hovered === p.id ? ACCENT : TEXT }}>
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed max-w-lg mb-4" style={{ color: DIM }}>{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-0.5"
                      style={{ border: `1px solid ${BORDER}`, color: MUTED }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xl transition-all duration-150"
                style={{ color: hovered === p.id ? ACCENT : MUTED }}>
                →
              </span>
            </div>
          </a>
        ))}
        <div style={{ borderTop: `1px solid ${BORDER}` }} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: ACCENT }}>02</span>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: TEXT }}>About</h2>
          </div>

          <div className="mb-8 relative w-48 h-48" style={{ border: `1px solid ${BORDER}` }}>
            <img
              src="/headshot.jpg"
              alt="Vasundhra Batra"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).nextElementSibling!.removeAttribute("hidden");
              }}
            />
            <div hidden className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              style={{ background: SURFACE, color: MUTED }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest text-center px-4">
                Add headshot.jpg<br />to /public
              </span>
            </div>
            <div className="absolute -bottom-px -right-px w-8 h-8"
              style={{ borderRight: `1px solid ${ACCENT}`, borderBottom: `1px solid ${ACCENT}` }} />
          </div>

          <div className="space-y-1 text-xs uppercase tracking-widest" style={{ color: DIM }}>
            <div>Based in —</div>
            <div style={{ color: TEXT }}>San Francisco Bay Area</div>
            <div className="pt-4">Available for —</div>
            <div style={{ color: ACCENT }}>Senior / Staff Roles</div>
          </div>
        </div>

        <div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: DIM }}>
            I've spent the last nine years building infrastructure that moves fast
            without breaking things — distributed caches, event-driven pipelines,
            and the internal tooling engineers actually want to use. I care about
            correctness, latency, and code that reads like prose.
          </p>
          <p className="text-sm leading-relaxed mb-12" style={{ color: DIM }}>
            Previously at{" "}
            <a href="https://www.cccis.com/" target="_blank" rel="noreferrer"
              style={{ color: TEXT, textDecoration: "underline", textDecorationColor: BORDER }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = TEXT)}
            >CCC Intelligent Solutions</a> and{" "}
            <span style={{ color: TEXT }}>Infosys</span>. MS in Management
            Information Systems from{" "}
            <a href="https://www.uic.edu/" target="_blank" rel="noreferrer"
              style={{ color: TEXT, textDecoration: "underline", textDecorationColor: BORDER }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = TEXT)}
            >University of Illinois at Chicago</a>. I contribute to a handful of open-source projects
            and occasionally write about systems design.
          </p>

          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: MUTED }}>Stack</div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span key={s}
                  className="text-xs px-3 py-1 transition-colors duration-150 cursor-default"
                  style={{ border: `1px solid ${BORDER}`, color: DIM }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = DIM; }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: MUTED }}>Certifications</div>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span key={c}
                  className="text-xs px-3 py-1"
                  style={{ border: `1px solid ${ACCENT}`, color: ACCENT }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl"
      style={{ borderTop: `1px solid ${BORDER}` }}>
      <div className="flex items-baseline gap-4 mb-12">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: ACCENT }}>03</span>
        <h2 className="text-2xl font-bold tracking-tight" style={{ color: TEXT }}>Contact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm leading-relaxed mb-8" style={{ color: DIM }}>
            Open to interesting engineering problems. If you're building
            something with real scale constraints or want to talk systems, reach
            out.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            ["GitHub", "github.com/VasundhraBatra", "https://github.com/VasundhraBatra?tab=repositories"],
            ["LinkedIn", "linkedin.com/in/vasu-batra", "https://www.linkedin.com/in/vasu-batra/"],
          ].map(([label, val, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 transition-colors duration-150"
              style={{ border: `1px solid ${BORDER}`, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
            >
              <span className="text-xs uppercase tracking-widest" style={{ color: MUTED }}>{label}</span>
              <span className="text-xs" style={{ color: DIM }}>{val}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4" style={{ borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-5xl text-xs uppercase tracking-widest"
        style={{ color: MUTED }}>
        <span>© 2026 Vasundhra Batra</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

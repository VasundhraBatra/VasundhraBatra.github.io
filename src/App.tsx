import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    name: "Distributed Cache Layer",
    stack: ["Go", "Redis", "gRPC"],
    desc: "A write-through cache layer handling 200k req/s with sub-millisecond p99 latency. Includes automatic sharding and a circuit breaker.",
    link: "#",
  },
  {
    id: "02",
    name: "Query Planner CLI",
    stack: ["Rust", "SQLite", "WASM"],
    desc: "REPL tool that parses and visualizes SQL query execution plans. Compiles to WASM for in-browser use.",
    link: "#",
  },
  {
    id: "03",
    name: "Event Sourcing Framework",
    stack: ["TypeScript", "Kafka", "PostgreSQL"],
    desc: "Lightweight event sourcing library with snapshot support and projection rebuilding. Zero external runtime dependencies.",
    link: "#",
  },
];

const STACK = [
  "Go", "Rust", "TypeScript", "Python",
  "Kubernetes", "PostgreSQL", "Redis", "Kafka",
  "gRPC", "Docker", "Terraform", "Linux",
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[--color-border] bg-[--color-bg]/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="text-[--color-accent] text-sm font-bold tracking-widest uppercase">
          &#x2f;&#x2f;&nbsp;YN
        </span>
        <div className="flex gap-8 text-xs text-[--color-dim] tracking-widest uppercase">
          {["work", "about", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="hover:text-[--color-text] transition-colors duration-150"
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
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 max-w-5xl mx-auto">
      <div className="mb-6 text-xs text-[--color-dim] tracking-[0.3em] uppercase">
        Software Engineer — Systems &amp; Infrastructure
      </div>
      <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight text-[--color-text] mb-8">
        Your<br />
        <span className="text-[--color-accent]">Name.</span>
      </h1>
      <p className="max-w-xl text-[--color-dim] text-sm leading-relaxed mb-12">
        I build reliable, high-throughput systems at the intersection of
        distributed computing and developer tooling. Currently open to senior
        and staff engineering roles.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-[--color-accent] text-[#0a0a0a] text-xs font-bold uppercase tracking-widest px-5 py-3 hover:opacity-90 transition-opacity"
        >
          View Work <span className="text-base leading-none">↓</span>
        </a>
        <a
          href="mailto:you@example.com"
          className="text-xs text-[--color-dim] uppercase tracking-widest hover:text-[--color-text] transition-colors"
        >
          Get in touch →
        </a>
      </div>
      <div className="mt-24 border-t border-[--color-border] pt-6 flex gap-12">
        {[["5+", "Years"], ["12", "Projects"], ["3", "OSS libs"]].map(
          ([num, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[--color-text]">{num}</div>
              <div className="text-xs text-[--color-dim] uppercase tracking-widest mt-0.5">
                {label}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-16">
        <span className="text-xs text-[--color-accent] font-bold tracking-widest uppercase">
          §01
        </span>
        <h2 className="text-2xl font-bold tracking-tight">Selected Work</h2>
      </div>

      <div className="space-y-0">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.link}
            className="group block border-t border-[--color-border] py-8 transition-colors duration-150"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="text-xs font-bold tracking-widest transition-colors duration-150"
                    style={{
                      color:
                        hovered === p.id
                          ? "var(--color-accent)"
                          : "var(--color-muted)",
                    }}
                  >
                    {p.id}
                  </span>
                  <h3 className="text-lg font-bold text-[--color-text] group-hover:text-[--color-accent] transition-colors duration-150">
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm text-[--color-dim] leading-relaxed max-w-lg mb-4">
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest border border-[--color-border] px-2 py-0.5 text-[--color-muted]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[--color-muted] group-hover:text-[--color-accent] text-xl transition-all duration-150 group-hover:translate-x-1 mt-1">
                →
              </span>
            </div>
          </a>
        ))}
        <div className="border-t border-[--color-border]" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-xs text-[--color-accent] font-bold tracking-widest uppercase">
              §02
            </span>
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
          </div>

          {/* Headshot — replace src with your image path or URL */}
          <div className="mb-8 relative w-48 h-48 border border-[--color-border]">
            <img
              src="/headshot.jpg"
              alt="Your Name"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).nextElementSibling!.removeAttribute("hidden");
              }}
            />
            <div
              hidden
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[--color-surface] text-[--color-muted]"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest text-center px-4">
                Add headshot.jpg<br />to /public
              </span>
            </div>
            <div className="absolute -bottom-px -right-px w-8 h-8 border-r border-b border-[--color-accent]" />
          </div>

          <div className="space-y-1 text-xs text-[--color-dim] uppercase tracking-widest">
            {["Based in —", "San Francisco, CA"].map((l, i) => (
              <div key={i} style={{ color: i === 1 ? "var(--color-text)" : undefined }}>
                {l}
              </div>
            ))}
            <div className="pt-4">
              {["Available for —", "Senior / Staff Roles"].map((l, i) => (
                <div key={i} style={{ color: i === 1 ? "var(--color-accent)" : undefined }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-[--color-dim] leading-relaxed mb-6">
            I've spent the last five years building infrastructure that moves fast
            without breaking things — distributed caches, event-driven pipelines,
            and the internal tooling engineers actually want to use. I care about
            correctness, latency, and code that reads like prose.
          </p>
          <p className="text-sm text-[--color-dim] leading-relaxed mb-12">
            Previously at <span className="text-[--color-text]">Acme Corp</span> and{" "}
            <span className="text-[--color-text]">Startup Co</span>. CS from
            State University. I contribute to a handful of open-source projects
            and occasionally write about systems design.
          </p>

          <div>
            <div className="text-xs text-[--color-muted] uppercase tracking-widest mb-4">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="text-xs border border-[--color-border] px-3 py-1 text-[--color-dim] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors duration-150 cursor-default"
                >
                  {s}
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
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-[--color-border]">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="text-xs text-[--color-accent] font-bold tracking-widest uppercase">
          §03
        </span>
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm text-[--color-dim] leading-relaxed mb-8">
            Open to interesting engineering problems. If you're building
            something with real scale constraints or want to talk systems, reach
            out.
          </p>
          <a
            href="mailto:you@example.com"
            className="inline-block text-lg font-bold text-[--color-text] hover:text-[--color-accent] transition-colors duration-150 border-b border-[--color-muted] pb-1"
          >
            you@example.com
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {[
            ["GitHub", "github.com/yourhandle"],
            ["LinkedIn", "linkedin.com/in/yourname"],
            ["Resume", "Download PDF →"],
          ].map(([label, val]) => (
            <a
              key={label}
              href="#"
              className="group flex items-center justify-between border border-[--color-border] px-4 py-3 hover:border-[--color-accent] transition-colors duration-150"
            >
              <span className="text-xs uppercase tracking-widest text-[--color-muted] group-hover:text-[--color-accent]">
                {label}
              </span>
              <span className="text-xs text-[--color-dim] group-hover:text-[--color-text] transition-colors">
                {val}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[--color-border] py-8 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-[--color-muted] uppercase tracking-widest">
        <span>© 2026 Your Name</span>
        <span className="text-[--color-accent]">&#x2f;&#x2f; Built with precision</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

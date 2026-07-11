import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c-2.7 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.3 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.3 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.42.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.7 2 12 2Zm0 1.8c2.65 0 2.97.01 4.02.06.97.04 1.5.2 1.85.34.46.18.79.4 1.14.75.35.35.57.68.75 1.14.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.02s-.01 2.97-.06 4.02c-.04.97-.2 1.5-.34 1.85-.18.46-.4.79-.75 1.14-.35.35-.68.57-1.14.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.02.06s-2.97-.01-4.02-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.14-.75 3.1 3.1 0 0 1-.75-1.14c-.14-.35-.3-.88-.34-1.85-.05-1.05-.06-1.37-.06-4.02s.01-2.97.06-4.02c.04-.97.2-1.5.34-1.85.18-.46.4-.79.75-1.14.35-.35.68-.57 1.14-.75.35-.14.88-.3 1.85-.34C9.03 3.81 9.35 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

function SubstackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 4.5h18V7H3V4.5Zm0 4.25h18v2.5H3v-2.5ZM3 13h18v8l-9-4-9 4v-8Z" />
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          05 — Contact
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Let's Build Something Together</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
          Open to full-time roles, freelance projects, and collaborations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          <a href="mailto:preciousbalogun1406@gmail.com" className="inline-flex items-center gap-2 hover:opacity-80">
            <Mail className="h-4 w-4" />
            <span>preciousbalogun1406@gmail.com</span>
          </a>
          <a href="tel:+2349030724216" className="inline-flex items-center gap-2 hover:opacity-80">
            <Phone className="h-4 w-4" />
            <span>+234 903 072 4216</span>
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-12 grid max-w-2xl gap-4 rounded-3xl bg-white/10 p-6 text-left backdrop-blur md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/60 focus:border-white focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/60 focus:border-white focus:outline-none"
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="Tell me about your project…"
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/60 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-md transition-transform hover:-translate-y-0.5"
          >
            {sent ? "Message Sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-4">
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: InstagramIcon, href: "#", label: "Instagram" },
            { icon: SubstackIcon, href: "https://substack.com/@preciousbalogun", label: "Substack" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.5 6.5H3v11h4.7c2.3 0 4-1.2 4-3.2 0-1.4-.8-2.4-2-2.7 1-.4 1.6-1.2 1.6-2.4 0-1.7-1.4-2.7-3.8-2.7Zm-2 1.8h2c1.1 0 1.8.5 1.8 1.4 0 .9-.7 1.4-1.8 1.4h-2V8.3Zm0 4.4h2.3c1.2 0 1.9.5 1.9 1.5s-.7 1.5-1.9 1.5H5.5v-3ZM19.5 13.6c0-2.4-1.5-4-3.9-4-2.4 0-4 1.7-4 4.1 0 2.4 1.6 4.1 4.1 4.1 1.9 0 3.3-.9 3.7-2.4h-2c-.3.6-.9 1-1.7 1-1.1 0-1.9-.7-2-1.8h5.7v-1Zm-5.7-.9c.2-1 .9-1.5 1.8-1.5s1.6.6 1.7 1.5h-3.5ZM13 7.3h5v1.4h-5V7.3Z" />
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
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
            { icon: BehanceIcon, href: "#", label: "Behance" },
            { icon: Github, href: "#", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
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
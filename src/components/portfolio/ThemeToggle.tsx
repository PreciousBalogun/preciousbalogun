import { useEffect, useRef, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";
const STORAGE_KEY = "theme";

function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(choice: ThemeChoice) {
  const isDark = choice === "dark" || (choice === "system" && getSystemPrefersDark());
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.classList.toggle("dark", isDark);
  window.setTimeout(() => root.classList.remove("theme-transition"), 350);
}

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Load stored preference
  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeChoice | null) ?? "system";
    setChoice(stored);
  }, []);

  // Apply theme + listen to OS changes when in system mode
  useEffect(() => {
    applyTheme(choice);
    if (choice !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [choice]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const select = (next: ThemeChoice) => {
    localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    setOpen(false);
  };

  const Icon = choice === "light" ? Sun : choice === "dark" ? Moon : Monitor;

  const options: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "system", label: "System", Icon: Monitor },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Icon className="h-4 w-4" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg animate-fade-in"
        >
          {options.map(({ value, label, Icon: OptIcon }) => {
            const active = choice === value;
            return (
              <button
                key={value}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => select(value)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-primary-soft hover:text-primary ${
                  active ? "text-primary" : "text-foreground"
                }`}
              >
                <OptIcon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
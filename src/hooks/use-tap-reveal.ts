import { useEffect } from "react";

/**
 * On touch / no-hover devices, mirrors desktop hover behavior with a
 * tap-to-toggle pattern: the first tap on an element marked with
 * `data-tap-reveal` reveals its "hover" state (via `data-tapped="true"`)
 * and swallows the click; a second tap performs the underlying action
 * (e.g. following a link). Tapping elsewhere clears the state.
 */
export function useTapReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: none)").matches) return;

    const clearOthers = (keep: Element | null) => {
      document
        .querySelectorAll<HTMLElement>('[data-tap-reveal][data-tapped="true"]')
        .forEach((n) => {
          if (n !== keep) n.removeAttribute("data-tapped");
        });
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-tap-reveal]");
      clearOthers(el);
      if (!el) return;
      if (el.getAttribute("data-tapped") !== "true") {
        el.setAttribute("data-tapped", "true");
        // Swallow the first tap so navigation waits for the second.
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
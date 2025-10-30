import { useEffect } from "react";

/**
 * Simple scroll reveal hook.
 * Observes elements with [data-reveal] and toggles the `active` class on them.
 * Keep animations subtle and performant.
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("active");
          } else {
            // optional: remove when not visible to allow re-play on scroll up
            el.classList.remove("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      }
    );

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    els.forEach((el) => {
      // ensure base class exists
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

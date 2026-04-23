import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop({ threshold = 600 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-4 right-4 z-40 rounded-xl px-3 py-2",
        "bg-emerald-500/15 ring-1 ring-emerald-300/30",
        "text-emerald-200 shadow-[0_8px_28px_rgba(0,0,0,.25)] backdrop-blur-md",
        "transition duration-300 hover:bg-emerald-500/25 hover:text-white",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

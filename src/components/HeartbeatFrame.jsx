export default function HeartbeatFrame({ children, className = "" }) {
  return (
    <div className={["group relative rounded-2xl p-[2px]", className].join(" ")}>
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none [transition:opacity_var(--hb-dur)_ease-in-out] group-hover:opacity-100 group-hover:[animation:hbBorder_var(--hb-dur)_ease-in-out_infinite]"
      />

      <div
        className="relative rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-[0_8px_28px_rgba(0,0,0,.25)] backdrop-blur-md"
        data-safe="header"
      >
        <div
          className="will-change-transform group-hover:[animation:hbScale_var(--hb-dur)_ease-in-out_infinite]"
          style={{ transform: "scale(1)", transition: "transform var(--hb-dur) ease-in-out" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

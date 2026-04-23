import HeartbeatFrame from "./HeartbeatFrame";

export default function Section({ id, title, subtitle, icon: Icon, children }) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-5xl px-4 py-6 scroll-mt-28">
      <HeartbeatFrame className="group/section">
        <div className="animate-[sectionReveal_.55s_cubic-bezier(.22,.78,.16,1)_both] p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                {Icon ? (
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/12 text-emerald-300 ring-1 ring-emerald-300/25 shadow-[0_0_18px_rgba(16,185,129,.22)] group-hover/section:animate-[stethPulse_var(--hb-dur)_ease-in-out]"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                ) : null}

                <h2 className="relative text-xl font-semibold tracking-tight text-white md:text-2xl">
                  <span className="relative inline-block">
                    {title}
                    <span
                      aria-hidden
                      className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-emerald-400 transition-transform [transition-duration:var(--hb-dur)] group-hover/section:scale-x-100"
                    />
                  </span>
                </h2>
              </div>

              {subtitle ? (
                <p className="mt-2 text-sm leading-6 text-slate-300/90 md:text-base">{subtitle}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 prose prose-invert max-w-none">{children}</div>
        </div>
      </HeartbeatFrame>
    </section>
  );
}

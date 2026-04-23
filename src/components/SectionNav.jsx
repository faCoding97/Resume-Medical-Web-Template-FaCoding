import HeartbeatFrame from "./HeartbeatFrame";
import siteConfig from "../content/site.config";

export default function SectionNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="relative z-20 mx-auto max-w-5xl px-4 pt-5"
    >
      <HeartbeatFrame>
        <div className="flex flex-wrap gap-2 px-4 py-4">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </HeartbeatFrame>
    </nav>
  );
}

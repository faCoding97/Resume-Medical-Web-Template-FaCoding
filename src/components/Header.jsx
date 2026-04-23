import { useEffect, useState } from "react";
import { Download, Mail, Phone } from "lucide-react";
import HeartbeatFrame from "./HeartbeatFrame";
import ProfileImage from "./ProfileImage";
import siteConfig from "../content/site.config";

const { site, person, hero } = siteConfig;

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [contactCounter, setContactCounter] = useState(0);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("contactRevealCount");
      if (stored) {
        const parsed = Number.parseInt(stored, 10);
        if (!Number.isNaN(parsed)) setContactCounter(parsed);
      }
    } catch {
      // no-op
    }
  }, []);

  const revealContact = () => {
    const next = contactCounter + 1;
    setShowContact(true);
    setContactCounter(next);
    try {
      window.localStorage.setItem("contactRevealCount", String(next));
    } catch {
      // no-op
    }
  };

  const primaryEmailHref = `mailto:${person.email}?subject=${encodeURIComponent(`Opportunity for ${person.name}`)}`;

  return (
    <header className="relative z-20 mx-auto max-w-5xl px-4 pt-8">
      <HeartbeatFrame>
        <div className="px-5 py-7 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.45fr_.85fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100">
                {hero.eyebrow}
              </div>

              <h1 className="mt-5 text-[clamp(2.1rem,4.8vw,3.8rem)] font-bold leading-[1.05] tracking-tight text-white">
                {person.name}
              </h1>

              <p className="mt-4 text-[1.05rem] font-medium text-slate-200/95">
                {person.title}
              </p>

              <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-300/95">
                {person.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/90">
                  South Africa
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/90">
                  General Surgery
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/90">
                  Emergency Medicine
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/90">
                  ICU
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <button
                  type="button"
                  onClick={revealContact}
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-5 py-3 font-medium text-emerald-100 transition hover:bg-emerald-400/20"
                >
                  <Phone className="h-4 w-4" />
                  <span>{hero.contactButtonLabel}</span>
                </button>

                <a
                  href={site.resumePdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  {hero.ctaPrimaryLabel}
                </a>

                <a
                  href={primaryEmailHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {hero.ctaSecondaryLabel}
                </a>
              </div>

              {showContact ? (
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200/95">
                  <a
                    href={`tel:${person.phoneIntl}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <span>{person.phonePretty}</span>
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4 text-emerald-300" />
                    <span>{person.email}</span>
                  </a>
                </div>
              ) : null}
            </div>

            <div className="lg:justify-self-end">
              <ProfileImage
                src={site.profileImagePath}
                fallbackSrc={site.profileImageFallbackPath}
                alt={site.profileImageAlt}
                logoSrc={site.bannerLogoPath}
                logoAlt={`${person.name} logo`}
              />
            </div>
          </div>
        </div>
      </HeartbeatFrame>
    </header>
  );
}

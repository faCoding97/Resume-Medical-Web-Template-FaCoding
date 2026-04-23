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
    <header className="relative z-20 mx-auto max-w-5xl px-4 pt-6 sm:pt-8">
      <HeartbeatFrame>
        <div className="px-4 py-5 sm:px-5 sm:py-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div className="max-w-3xl">
              <h1 className="text-[clamp(1.8rem,3.8vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                {person.name}
              </h1>

              <p className="mt-2 text-sm font-medium tracking-[0.02em] text-emerald-200/90 sm:text-[0.95rem]">
                {person.title}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-[0.96rem]">
                {person.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
                <button
                  type="button"
                  onClick={revealContact}
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-4 py-2.5 font-medium text-emerald-100 transition hover:bg-emerald-400/20">
                  <Phone className="h-4 w-4" />
                  <span>{hero.contactButtonLabel}</span>
                </button>

                {/* temprory this one is enabled */}
                {/* <a
                  href={site.resumePdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white transition hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  {hero.ctaPrimaryLabel}
                </a> */}

                <a
                  href={primaryEmailHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white transition hover:bg-white/10">
                  <Mail className="h-4 w-4" />
                  {hero.ctaSecondaryLabel}
                </a>
              </div>

              {showContact ? (
                <div className="mt-4 flex flex-wrap gap-2.5 text-sm text-slate-200/95">
                  <a
                    href={`tel:${person.phoneIntl}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 hover:bg-white/10">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <span>{person.phonePretty}</span>
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 hover:bg-white/10">
                    <Mail className="h-4 w-4 text-emerald-300" />
                    <span>{person.email}</span>
                  </a>
                </div>
              ) : null}
            </div>

            <div className="mx-auto w-full max-w-[250px] lg:mx-0 lg:justify-self-end">
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

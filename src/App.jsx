import {
  BadgeCheck,
  BriefcaseMedical,
  GraduationCap,
  Languages,
  Medal,
  Microscope,
  Users,
} from "lucide-react";
import MedicalBackground from "./components/MedicalBackground";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionNav from "./components/SectionNav";
import BackToTop from "./components/BackToTop";
import siteConfig from "./content/site.config";

const { person, sections, footer } = siteConfig;

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-emerald-300/60">
        Skip to main content
      </a>

      <MedicalBackground />
      <BackToTop threshold={420} />

      <Header />
      <SectionNav />

      <main id="main-content" className="pb-16">
        <Section
          id="about"
          title={`About ${person.name}`}
          subtitle={person.availability}
          icon={Microscope}>
          <div className="space-y-4 text-base leading-7 text-slate-200/95">
            {person.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Clinical and practical medical experience"
          icon={BriefcaseMedical}>
          <div className="space-y-5 not-prose">
            {sections.experience.map((role) => (
              <article
                key={`${role.title}-${role.organisation}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-200/90">
                      {role.organisation}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-300/90">
                    {role.period}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200/95 marker:text-emerald-300">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          title="Education"
          subtitle="Academic and postgraduate background"
          icon={GraduationCap}>
          <div className="space-y-4 not-prose">
            {sections.education.map((item) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                <h3 className="text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-200/90">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm text-emerald-200/85">{item.year}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title={sections.skillsTitle}
          subtitle={sections.skillsSubtitle}
          icon={BadgeCheck}>
          <div className="grid gap-6 not-prose lg:grid-cols-[1.35fr_.95fr]">
            <div>
              <h3 className="mb-3 text-base font-semibold text-white">
                Core Skills
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {person.skills.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-base font-semibold text-white">
                Courses & Certifications
              </h3>
              <ul className="grid gap-3">
                {sections.certifications.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-4 text-sm font-semibold text-emerald-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="achievements"
          title="Achievements"
          subtitle="Selected academic, leadership, and competitive highlights"
          icon={Medal}>
          <ul className="grid gap-3 sm:grid-cols-2 not-prose">
            {sections.achievements.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="languages"
          title="Languages"
          subtitle="Working and communication languages"
          icon={Languages}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 not-prose">
            {sections.languages.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                <p className="text-base font-semibold text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-emerald-200/90">{item.level}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="references"
          title="References"
          subtitle="Professional references available on request"
          icon={Users}>
          <div className="space-y-4 not-prose">
            {sections.references.map((item) => (
              <article
                key={`${item.name}-${item.role}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-200/90">{item.role}</p>
                <p className="mt-2 text-sm text-emerald-200/85">
                  {item.contact}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer className="relative z-10 mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-6 text-sm text-slate-300 shadow-[0_10px_30px_rgba(0,0,0,.2)] ring-1 ring-white/10 backdrop-blur-md">
          <p>{footer.note}</p>
        </div>
      </footer>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-center justify-center flex-wrap gap-2 text-center">
          <p className="text-gray-100 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
            <span className="whitespace-nowrap">Written by:</span>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              href="https://elixcode.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="/logo.png"
                alt="Elix Code Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              Elix Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

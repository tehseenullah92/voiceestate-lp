import { Mail, MapPin, Phone, ChevronUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import svgPaths from "../../imports/svg-q3uwntprd4";

const sectionLinkKeys = [
  { key: "nav.howItWorks", id: "how-it-works" },
  { key: "nav.dashboard", id: "dashboard" },
  { key: "nav.features", id: "features" },
  { key: "nav.testimonials", id: "testimonials" },
];

export function FooterNew() {
  const { tr } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#060810" }}>
      {/* Glow accent at top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[1px] w-[60%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #1a8ee9 50%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[80px] w-[40%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(26,142,233,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="mx-auto max-w-[1200px] px-6 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        {/* Top row - brand + back to top */}
        <div className="mb-14 flex items-start justify-between sm:mb-16">
          <div>
            <div className="flex items-center gap-3">
              {/* Waveform logo */}
              <div className="relative shrink-0" style={{ width: 36, height: 36 }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 54 54">
                  <path d={svgPaths.p249a000} fill="#1a8ee9" opacity="0.35" />
                  <path d={svgPaths.p3273a700} fill="#1a8ee9" opacity="0.45" />
                  <path d={svgPaths.p1fe7c700} fill="#1a8ee9" opacity="0.55" />
                  <path d={svgPaths.p3e6db00} fill="#1a8ee9" opacity="0.6" />
                  <path d={svgPaths.pc5f6500} fill="#1a8ee9" opacity="0.7" />
                  <path d={svgPaths.p30a93e80} fill="#1a8ee9" opacity="0.75" />
                  <path d={svgPaths.p169b5200} fill="#1a8ee9" opacity="0.85" />
                  <path d={svgPaths.pd37c970} fill="#1a8ee9" />
                  <path d={svgPaths.pec5cf80} fill="#1a8ee9" opacity="0.92" />
                  <path d={svgPaths.p24e47980} fill="#1a8ee9" opacity="0.8" />
                  <path d={svgPaths.p34a231f0} fill="#1a8ee9" opacity="0.7" />
                  <path d={svgPaths.p33489e60} fill="#1a8ee9" opacity="0.65" />
                  <path d={svgPaths.pff44f00} fill="#1a8ee9" opacity="0.55" />
                  <path d={svgPaths.p147bb880} fill="#1a8ee9" opacity="0.5" />
                  <path d={svgPaths.p32a57c00} fill="#1a8ee9" opacity="0.4" />
                  <path d={svgPaths.p1dda6500} fill="#1a8ee9" opacity="0.3" />
                </svg>
              </div>
              <div>
                <span
                  className="text-[22px] text-white"
                  style={{ fontWeight: 600 }}
                >
                  Con
                  <span style={{ color: "#1a8ee9" }}>vaire</span>
                </span>
                <p
                  className="text-[11px]"
                  style={{ color: "rgba(255,255,255,0.3)", marginTop: -1 }}
                >
                  {tr("nav.tagline")}
                </p>
              </div>
            </div>
            <div
              className="mt-3 h-[2px] w-10"
              style={{ backgroundColor: "#1a8ee9" }}
            />
          </div>
          <button
            onClick={scrollToTop}
            className="group flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(26,142,233,0.4)";
              e.currentTarget.style.backgroundColor = "rgba(26,142,233,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <ChevronUp size={16} color="rgba(255,255,255,0.5)" />
          </button>
        </div>

        {/* Main grid */}
        <div className="mb-16 grid gap-12 sm:mb-20 md:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          {/* CTA column */}
          <div>
            <h3
              className="mb-5 text-[20px] text-white sm:text-[24px] lg:text-[28px]"
              style={{ fontWeight: 600, lineHeight: 1.25 }}
            >
              {tr("footer.heading").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h3>
            <p
              className="mb-8 max-w-[300px] text-[14px]"
              style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}
            >
              {tr("footer.tagline")}
            </p>
          </div>

          {/* Section links */}
          <div>
            <h4
              className="mb-5 text-[11px]"
              style={{
                color: "#1a8ee9",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {tr("footer.sections")}
            </h4>
            <ul className="flex flex-col gap-3.5">
              {sectionLinkKeys.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex cursor-pointer items-center gap-1.5 text-[14px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)", border: "none", background: "none", padding: 0 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    <span
                      className="inline-block h-[3px] w-0 transition-all duration-200"
                      style={{ backgroundColor: "#1a8ee9" }}
                      ref={(el) => {
                        if (!el) return;
                        const parent = el.parentElement;
                        parent?.addEventListener("mouseenter", () => {
                          el.style.width = "12px";
                        });
                        parent?.addEventListener("mouseleave", () => {
                          el.style.width = "0px";
                        });
                      }}
                    />
                    {tr(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="mb-5 text-[11px]"
              style={{
                color: "#1a8ee9",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {tr("footer.getInTouch")}
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@convaire.com"
                className="flex items-center gap-3 px-4 py-3 transition-all duration-200"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(26,142,233,0.2)";
                  e.currentTarget.style.backgroundColor = "rgba(26,142,233,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                  style={{ backgroundColor: "rgba(26,142,233,0.1)" }}
                >
                  <Mail size={13} color="#1a8ee9" />
                </div>
                <span
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  hello@convaire.com
                </span>
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 px-4 py-3 transition-all duration-200"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(26,142,233,0.2)";
                  e.currentTarget.style.backgroundColor = "rgba(26,142,233,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                  style={{ backgroundColor: "rgba(26,142,233,0.1)" }}
                >
                  <Phone size={13} color="#1a8ee9" />
                </div>
                <span
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  +92 300 123 4567
                </span>
              </a>
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                  style={{ backgroundColor: "rgba(26,142,233,0.1)" }}
                >
                  <MapPin size={13} color="#1a8ee9" />
                </div>
                <span
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {tr("footer.location")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant watermark brand */}
      <div
        className="pointer-events-none relative w-full overflow-hidden"
        style={{ height: "clamp(90px, 16vw, 200px)" }}
      >
        <p
          className="absolute bottom-0 left-0 w-full text-left translate-y-[15%] pl-6 sm:pl-8"
          style={{
            fontSize: "clamp(32px, 16vw, 270px)",
            fontWeight: 900,
            backgroundImage:
              "linear-gradient(180deg, rgba(26,142,233,0.12) 0%, rgba(56,189,248,0.02) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          CONVAIRE
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-[1200px] px-6 sm:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {tr("footer.copyright")}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://ftstudios.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1a8ee9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
              }
            >
              ftstudios.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
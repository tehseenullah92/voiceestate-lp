import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { type Lang } from "../i18n/translations";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-q3uwntprd4";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
];

const navLinkKeys = [
  { key: "nav.howItWorks", href: "#how-it-works" },
  { key: "nav.features", href: "#features" },
  { key: "nav.dashboard", href: "#dashboard" },
  { key: "nav.testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, tr } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for nav highlight
  useEffect(() => {
    const sectionIds = ["hero", "how-it-works", "features", "dashboard", "testimonials"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If it's the hero, we want to clear any active state
            if (entry.target.id === "hero") {
              setActiveSection("");
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        // rootMargin targets the top 20% of the viewport as the "active" zone
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0
      }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id); // Immediate feedback
    setMobileOpen(false);
  };

  const switchLanguage = (code: Lang) => {
    navigate(`/${code}`);
    setDropdownOpen(false);
  };

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  // Color scheme based on scroll state
  const isDark = !scrolled;
  const textColor = isDark ? "rgba(255,255,255,0.7)" : "#64748b";
  const textHoverColor = isDark ? "#ffffff" : "#0f172a";
  const brandColor = isDark ? "#ffffff" : "#0f172a";
  const accentColor = "#1a8ee9";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(15,23,42,0.6)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(226,232,240,0.5)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled
          ? "0 1px 20px rgba(0,0,0,0.06)"
          : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
          }}
          className="flex cursor-pointer items-center gap-2.5"
          style={{ border: "none", background: "none", padding: 0 }}
        >
          {/* Logo SVG waveform */}
          <div className="relative shrink-0" style={{ width: 32, height: 32 }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 54 54">
              <path d={svgPaths.p249a000} fill={accentColor} opacity="0.35" />
              <path d={svgPaths.p3273a700} fill={accentColor} opacity="0.45" />
              <path d={svgPaths.p1fe7c700} fill={accentColor} opacity="0.55" />
              <path d={svgPaths.p3e6db00} fill={accentColor} opacity="0.6" />
              <path d={svgPaths.pc5f6500} fill={accentColor} opacity="0.7" />
              <path d={svgPaths.p30a93e80} fill={accentColor} opacity="0.75" />
              <path d={svgPaths.p169b5200} fill={accentColor} opacity="0.85" />
              <path d={svgPaths.pd37c970} fill={accentColor} />
              <path d={svgPaths.pec5cf80} fill={accentColor} opacity="0.92" />
              <path d={svgPaths.p24e47980} fill={accentColor} opacity="0.8" />
              <path d={svgPaths.p34a231f0} fill={accentColor} opacity="0.7" />
              <path d={svgPaths.p33489e60} fill={accentColor} opacity="0.65" />
              <path d={svgPaths.pff44f00} fill={accentColor} opacity="0.55" />
              <path d={svgPaths.p147bb880} fill={accentColor} opacity="0.5" />
              <path d={svgPaths.p32a57c00} fill={accentColor} opacity="0.4" />
              <path d={svgPaths.p1dda6500} fill={accentColor} opacity="0.3" />
            </svg>
          </div>
          <div className="min-w-0 text-left">
            <span
              className="text-[16px] transition-colors duration-300 sm:text-[17px]"
              style={{ fontWeight: 600, color: brandColor }}
            >
              Con
              <span style={{ color: accentColor }}>vaire</span>
            </span>
            <p
              className="hidden text-[10px] sm:block"
              style={{
                color: isDark ? "rgba(255,255,255,0.4)" : "#94a3b8",
                marginTop: -1,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {tr("nav.tagline")}
            </p>
          </div>
        </button>

        {/* Desktop nav links - centered */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinkKeys.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.href)}
                className="relative cursor-pointer px-3.5 py-2 text-[13px] transition-all duration-200"
                style={{
                  color: isActive ? accentColor : textColor,
                  border: "none",
                  background: "none",
                  fontWeight: isActive ? 600 : 500,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = textHoverColor;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = textColor;
                }}
              >
                {tr(link.key)}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 h-[2px] w-5"
                    style={{
                      backgroundColor: accentColor,
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex cursor-pointer items-center gap-1.5 px-2.5 py-2 text-[13px] transition-all duration-300"
              style={{
                border: isDark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(226,232,240,0.7)",
                color: isDark ? "rgba(255,255,255,0.7)" : "#0f172a",
                fontWeight: 500,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(241,245,249,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.6)";
              }}
            >
              <Globe
                size={14}
                color={isDark ? "rgba(255,255,255,0.5)" : "#64748b"}
              />
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown
                size={13}
                color={isDark ? "rgba(255,255,255,0.4)" : "#64748b"}
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full mt-2 w-44 py-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(226,232,240,0.7)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  right: 0,
                  zIndex: 100,
                }}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLanguage(l.code)}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-[14px] transition-colors duration-100"
                    style={{
                      backgroundColor:
                        l.code === lang
                          ? "rgba(26,142,233,0.06)"
                          : "transparent",
                      color: l.code === lang ? "#1a8ee9" : "#0f172a",
                      fontWeight: l.code === lang ? 600 : 400,
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (l.code !== lang)
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        l.code === lang
                          ? "rgba(26,142,233,0.06)"
                          : "transparent";
                    }}
                  >
                    <span className="text-[16px]">{l.label}</span>
                    {l.code === lang && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#1a8ee9"
                        className="ml-auto"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>


          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center transition-colors duration-200 md:hidden"
            style={{ border: "none", background: "none" }}
          >
            {mobileOpen ? (
              <X size={20} color={isDark ? "#ffffff" : "#0f172a"} />
            ) : (
              <Menu size={20} color={isDark ? "#ffffff" : "#0f172a"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="px-4 pb-5 pt-1 md:hidden"
          style={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(15,23,42,0.95)",
            backdropFilter: "blur(20px)",
            borderTop: scrolled
              ? "1px solid rgba(226,232,240,0.3)"
              : "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinkKeys.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="flex w-full cursor-pointer items-center gap-2.5 py-3 text-left text-[15px] transition-colors duration-200"
                  style={{
                    color: isActive
                      ? accentColor
                      : scrolled
                        ? "#0f172a"
                        : "rgba(255,255,255,0.7)",
                    fontWeight: isActive ? 600 : 500,
                    border: "none",
                    background: "none",
                    borderBottom: scrolled
                      ? "1px solid rgba(226,232,240,0.3)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {isActive && (
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                  )}
                  {tr(link.key)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
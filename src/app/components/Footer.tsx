import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { label: "How It Works", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "API Docs", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        display: "none",
      }}
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <span
                className="text-[20px] text-white"
                style={{ fontWeight: 600 }}
              >
                Convaire
              </span>
              <div
                className="mt-1 h-[2px] w-8"
                style={{ backgroundColor: "#1a8ee9" }}
              />
            </div>
            <p
              className="mb-6 max-w-[260px] text-[14px]"
              style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
            >
              AI-powered voice campaigns built specifically for real estate
              businesses. Automate calls, capture leads, and book site visits.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@convaire.com"
                className="flex items-center gap-2 text-[13px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#1a8ee9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                <Mail size={14} />
                hello@convaire.com
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2 text-[13px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#1a8ee9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                <Phone size={14} />
                +92 300 123 4567
              </a>
              <span
                className="flex items-center gap-2 text-[13px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <MapPin size={14} />
                Islamabad, Pakistan
              </span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4
              className="mb-4 text-[12px]"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-[14px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4
              className="mb-4 text-[12px]"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4
              className="mb-4 text-[12px]"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-8 flex cursor-pointer items-center gap-1.5 text-[13px] transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.4)",
                border: "none",
                background: "none",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1a8ee9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              Back to top
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; 2026 Convaire. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            />
            <span
              className="text-[12px]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
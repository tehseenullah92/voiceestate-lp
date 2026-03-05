import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Phone, Globe, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const earlyAccessPerkKeys = [
  { icon: Phone, key: "hero.perk1" },
  { icon: Globe, key: "hero.perk2" },
  { icon: Clock, key: "hero.perk3" },
];

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { tr } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    try {
      const formData = new FormData();
      formData.append("action", "ft_submit");
      formData.append("nonce", "8e2b457b6f");
      formData.append("email", email);

      const response = await fetch("https://ftstudios.co/wp-admin/admin-ajax.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      console.log(result);

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    } catch (error) {
      console.error("Failed to submit hero form:", error);
    }
  };

  const avatarColors = ["#1a8ee9", "#0b5b9a", "#1e293b", "#3b82f6", "#0f172a"];
  const initials = ["AM", "SK", "RJ", "FA", "HK"];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,142,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,142,233,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px]"
        style={{
          background: "radial-gradient(circle, rgba(26,142,233,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px]"
        style={{
          background: "radial-gradient(circle, rgba(11,91,154,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col items-center pb-16 pt-28 text-center sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-40">
          {/* Early Access badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2"
              style={{
                backgroundColor: "rgba(26,142,233,0.08)",
                border: "1px solid rgba(26,142,233,0.2)",
              }}
            >
              <div className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping opacity-75"
                  style={{ backgroundColor: "#22c55e", borderRadius: "50%" }}
                />
                <span
                  className="relative inline-flex h-2 w-2"
                  style={{ backgroundColor: "#22c55e", borderRadius: "50%" }}
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px]"
                style={{
                  color: "#1a8ee9",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {tr("hero.badge")}
              </span>
              <Sparkles size={14} color="#1a8ee9" />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5 max-w-[820px] text-[32px] sm:mb-6 sm:text-[44px] md:text-[52px] lg:text-[64px]"
            style={{ fontWeight: 800, color: "#ffffff", lineHeight: 1.08 }}
          >
            {tr("hero.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-8 max-w-[600px] text-[15px] sm:mb-10 sm:text-[17px] lg:text-[19px]"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            {tr("hero.desc")}
          </motion.p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            onSubmit={handleSubmit}
            className="mx-auto mb-6 flex w-full max-w-[520px] flex-col gap-3 sm:mb-8 sm:flex-row"
          >
            {!submitted ? (
              <>
                <input
                  type="email"
                  placeholder={tr("hero.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 text-[15px] outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(26,142,233,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
                <button
                  id="singleInputBtn"
                  type="submit"
                  className="group flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 text-white transition-all duration-200"
                  style={{ backgroundColor: "#1a8ee9", border: "none" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0b5b9a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1a8ee9")
                  }
                >
                  <span style={{ fontWeight: 600 }}>{tr("hero.cta")}</span>
                  <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex w-full items-center justify-center gap-2 px-4 py-3.5"
                style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span style={{ fontWeight: 600, color: "#22c55e" }}>
                  {tr("hero.submitted")}
                </span>
              </motion.div>
            )}
          </motion.form>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12 flex items-center justify-center gap-3 sm:mb-16"
          >
            <div className="flex -space-x-2.5">
              {initials.map((init, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] text-white"
                  style={{
                    backgroundColor: avatarColors[i],
                    fontWeight: 600,
                    border: "2px solid #0f172a",
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <strong style={{ color: "rgba(255,255,255,0.75)" }}>200+</strong> {tr("hero.waitlistCount")}
            </span>
          </motion.div>

          {/* Perk pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {earlyAccessPerkKeys.map((perk) => (
              <div
                key={perk.key}
                className="flex items-center gap-2 px-4 py-2.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <perk.icon size={15} color="#1a8ee9" />
                <span
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}
                >
                  {tr(perk.key)}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 10%, #1a8ee9 50%, transparent 90%)",
          opacity: 0.4,
        }}
      />
    </section>
  );
}
import { useState } from "react";
import { motion } from "motion/react";
import { Lock, Bell, Tag, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { tr } = useLanguage();
  const [waitlistCount, setWaitlistCount] = useState(() => {
    try {
      const stored = localStorage.getItem("ve_waitlist_count");
      return stored ? parseInt(stored) : 214;
    } catch {
      return 214;
    }
  });

  const validate = () => {
    if (!email.includes("@") || !email.includes(".")) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem("ve_waitlist") || "[]");
        existing.push({ email, date: new Date().toISOString() });
        localStorage.setItem("ve_waitlist", JSON.stringify(existing));

        const newCount = waitlistCount + 1;
        localStorage.setItem("ve_waitlist_count", String(newCount));
        setWaitlistCount(newCount);
      } catch {
        // localStorage unavailable
      }

      setSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  const trustItems = [
    { icon: Lock, text: tr("waitlist.secure") },
    { icon: Bell, text: tr("waitlist.noSpam") },
    { icon: Tag, text: tr("waitlist.earlyAccess") },
  ];

  return (
    <section
      id="waitlist-cta"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(26,142,233,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 100%, rgba(26,142,233,0.1) 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #1a8ee9, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:items-center lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-6 inline-flex items-center gap-2.5 px-4 py-2"
              style={{
                backgroundColor: "rgba(26,142,233,0.12)",
                border: "1px solid rgba(26,142,233,0.2)",
              }}
            >
              <Sparkles size={15} color="#1a8ee9" />
              <span
                className="text-[12px] sm:text-[14px]"
                style={{ color: "#1a8ee9", fontWeight: 600, letterSpacing: "0.03em" }}
              >
                LIMITED EARLY ACCESS
              </span>
            </div>

            <h2
              className="mb-5 max-w-[620px] text-[30px] text-white sm:text-[38px] lg:text-[48px]"
              style={{ fontWeight: 600, lineHeight: 1.15 }}
            >
              {tr("waitlist.title")}
            </h2>

            <p
              className="mb-10 max-w-[560px] text-[16px] sm:text-[18px]"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
            >
              {tr("waitlist.desc")}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {trustItems.map((t) => (
                <div
                  key={t.text}
                  className="flex items-center gap-2.5 px-4 py-2.5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <t.icon size={15} color="#1a8ee9" />
                  <span
                    className="text-[13px] sm:text-[14px]"
                    style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
                  >
                    {t.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="relative p-7 sm:p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="mb-6 text-center text-[14px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {tr("waitlist.formDesc")}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-8"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(34,197,94,0.15)" }}
                  >
                    <CheckCircle2 size={28} color="#22c55e" />
                  </div>
                  <p
                    className="text-[18px] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    {tr("waitlist.success")}
                  </p>
                  <p
                    className="text-[14px]"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {tr("waitlist.successDesc")}
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex w-full max-w-[640px] flex-col gap-3 sm:flex-row sm:gap-4"
                >
                  <input
                    type="email"
                    placeholder={tr("hero.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 text-[16px] outline-none sm:h-[66px] sm:flex-1"
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
                    type="submit"
                    disabled={submitting || !validate()}
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-5 py-4 text-[15px] text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[66px] sm:w-auto sm:min-w-[180px]"
                    style={{ backgroundColor: "#1a8ee9", border: "none" }}
                    onMouseEnter={(e) => {
                      if (!submitting && validate()) {
                        e.currentTarget.style.backgroundColor = "#0b5b9a";
                      }
                    }}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1a8ee9")
                    }
                  >
                    {submitting ? (
                      tr("waitlist.joining")
                    ) : (
                      <>
                        {tr("waitlist.cta")}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}

              <p
                className="mt-5 text-center text-[11px] sm:text-[12px]"
                style={{ color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}
              >
                {tr("waitlist.trust")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

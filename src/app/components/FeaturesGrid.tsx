import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Bot,
  Megaphone,
  Target,
  CalendarCheck,
  FileAudio,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const features = [
  {
    icon: Bot,
    title: 'AI voice agent "Zara"',
    desc: "Speaks fluent Urdu, English, and Arabic. Handles objections naturally with human-like conversation flow.",
    tag: "AI powered",
    stat: "98.7% natural speech score",
  },
  {
    icon: Megaphone,
    title: "Outbound campaigns",
    desc: "Call hundreds of clients with a single trigger. Schedule campaigns, set time zones, and auto-retry missed calls.",
    tag: "Automation",
    stat: "300+ calls per hour",
  },
  {
    icon: Target,
    title: "Auto lead capture",
    desc: "Interest detected from conversation in real time. Leads created instantly with confidence scoring.",
    tag: "Smart detection",
    stat: "38% avg conversion rate",
  },
  {
    icon: CalendarCheck,
    title: "Site visit booking",
    desc: "Zara schedules visits during the call, no human needed. Syncs with your calendar automatically.",
    tag: "Scheduling",
    stat: "Auto-books in 45 seconds",
  },
  {
    icon: FileAudio,
    title: "Call transcripts & recordings",
    desc: "Full record of every conversation. Search, filter, and export transcripts for your team.",
    tag: "Documentation",
    stat: "100% calls recorded",
  },
  {
    icon: Building2,
    title: "Multi-project support",
    desc: "Run separate campaigns for each property project. Track performance across all your developments.",
    tag: "Scalable",
    stat: "Unlimited projects",
  },
];

export function FeaturesGrid() {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { tr } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="features"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20"
        >
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(26,142,233,0.08)",
                  border: "1px solid rgba(26,142,233,0.15)",
                }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#1a8ee9" }}
                />
                <span
                  className="text-[12px] tracking-[0.1em] uppercase"
                  style={{ color: "#1a8ee9", fontWeight: 600 }}
                >
                  {tr("nav.features")}
                </span>
              </div>
              <h2
                className="max-w-[520px] text-[26px] sm:text-[32px] lg:text-[42px]"
                style={{ fontWeight: 700, color: "#0f172a", lineHeight: 1.15 }}
              >
                {tr("features.title")}
              </h2>
            </div>
            <p
              className="max-w-[360px] text-[15px]"
              style={{ color: "#64748b", lineHeight: 1.7 }}
            >
              Every feature is designed specifically for real estate workflows.
              From property campaigns to site visit scheduling.
            </p>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-white p-6 transition-all duration-300"
              style={{
                border:
                  hoveredIndex === i
                    ? "1px solid #1a8ee9"
                    : "1px solid #e2e8f0",
                boxShadow:
                  hoveredIndex === i
                    ? "0 8px 30px rgba(26,142,233,0.08)"
                    : "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 h-[3px] w-full transition-opacity duration-300"
                style={{
                  backgroundColor: "#1a8ee9",
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              />

              {/* Tag + Icon row */}
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center"
                  style={{
                    backgroundColor: "rgba(26,142,233,0.08)",
                  }}
                >
                  <f.icon size={24} color="#1a8ee9" />
                </div>
                <span
                  className="mt-1 px-2 py-0.5 text-[10px]"
                  style={{
                    backgroundColor: "rgba(26,142,233,0.06)",
                    color: "#1a8ee9",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  {f.tag}
                </span>
              </div>

              {/* Content */}
              <h3
                className="mb-2 text-[17px]"
                style={{ fontWeight: 700, color: "#0f172a" }}
              >
                {tr(`features.${i + 1}.title`)}
              </h3>
              <p
                className="mb-5 text-[14px]"
                style={{ color: "#64748b", lineHeight: 1.7 }}
              >
                {tr(`features.${i + 1}.desc`)}
              </p>

              {/* Bottom stat + arrow */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid #e2e8f0" }}
              >
                <span
                  className="text-[12px]"
                  style={{ color: "#1a8ee9", fontWeight: 600 }}
                >
                  {f.stat}
                </span>
                <div
                  className="flex h-7 w-7 items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor:
                      hoveredIndex === i ? "#1a8ee9" : "#f1f5f9",
                    border:
                      hoveredIndex === i
                        ? "1px solid #1a8ee9"
                        : "1px solid #e2e8f0",
                  }}
                >
                  <ArrowRight
                    size={13}
                    color={hoveredIndex === i ? "white" : "#64748b"}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
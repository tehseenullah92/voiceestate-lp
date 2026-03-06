import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Zap, Globe, Clock, Timer } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function CountUpStat({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Zap,
    value: 300,
    suffix: "+",
    prefix: "",
    label: "Calls per hour",
    desc: "Outbound calls handled by Zara every hour, non-stop",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "",
    prefix: "",
    label: "Languages supported",
    desc: "Fluent in Urdu, English, and Arabic for your market",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    prefix: "",
    label: "Always on",
    desc: "No breaks, no holidays. Your AI agent works around the clock",
  },
  {
    icon: Timer,
    value: 2,
    suffix: " min",
    prefix: "< ",
    label: "Avg call duration",
    desc: "Quick, focused conversations that qualify leads fast",
  },
];

export function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { tr } = useLanguage();

  const labelKeys = [
    "stats.callsPerHour",
    "stats.languagesDisplay",
    "stats.alwaysOn",
    "stats.avgCallDuration",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
      style={{
        backgroundColor: "#0f172a",
      }}
    >
      {/* Subtle top/bottom lines */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(26,142,233,0.25), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(26,142,233,0.25), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            className="mb-3 text-[24px] text-white sm:text-[30px] lg:text-[38px]"
            style={{ fontWeight: 600, lineHeight: 1.15 }}
          >
            {tr("stats.title")}
          </h2>
          <p
            className="mx-auto max-w-[440px] text-[14px] sm:text-[15px]"
            style={{ color: "#64748b", lineHeight: 1.7 }}
          >
            {tr("stats.desc")}
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden p-6 text-center transition-all duration-300"
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,142,233,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 h-[2px] w-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #1a8ee9, transparent)",
                  opacity: 0.4,
                }}
              />

              {/* Icon */}
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center"
                style={{
                  backgroundColor: "rgba(26,142,233,0.1)",
                }}
              >
                <s.icon size={22} color="#1a8ee9" />
              </div>

              {/* Value */}
              <p
                className="mb-1 text-[32px] sm:text-[38px] lg:text-[44px]"
                style={{ fontWeight: 600, lineHeight: 1, color: "#1a8ee9" }}
              >
                <CountUpStat
                  target={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                />
              </p>

              {/* Label */}
              <p
                className="mb-3 text-[14px] text-white sm:text-[15px]"
                style={{ fontWeight: 600 }}
              >
                {tr(labelKeys[i])}
              </p>

              {/* Description */}
              <p
                className="text-[12px] sm:text-[13px]"
                style={{ color: "#64748b", lineHeight: 1.6 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
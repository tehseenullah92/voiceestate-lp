import { useEffect, useRef, useState } from "react";
import { Upload, Megaphone, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const BUILDING_IMAGES = {
  dubaiMarina: "https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBsdXh0cnklMjBza3lzY3JhcGVyJTIwbmlnaHR8ZW58MXx8fHwxNzcyNzM2NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  riyadhKAFD: "https://images.unsplash.com/photo-1770230942350-645a24ee802a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXlhZGglMjBTYXVkaSUyMEFyYWJpYSUyMG1vZGVybiUyMHRvd2VyfGVufDF8fHx8MTc3MjczNjQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  islamabad: "https://images.unsplash.com/photo-1640698951132-b6498c51147b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWtpc3RhbiUyMElzbGFtYWJhZCUyMG1vZGVybiUyMGhpZ2hyaXNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNzM2NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const steps = [
  {
    num: 1,
    title: "Upload clients",
    desc: "Import your contact list via CSV or add manually. Tag by location, interest, or property type.",
    icon: Upload,
    preview: {
      rows: [
        { name: "Ali Hassan", tag: "Islamabad", status: "New" },
        { name: "Fatima Noor", tag: "Dubai Marina", status: "Imported" },
        { name: "Bilal Ahmed", tag: "KAFD Riyadh", status: "New" },
      ],
    },
  },
  {
    num: 2,
    title: "Launch a campaign",
    desc: "Create a campaign for any project. Set calling hours, language, and let Zara handle the rest.",
    icon: Megaphone,
    preview: {
      campaign: "Giga Mall",
      lang: "Urdu + English",
      calls: "342 contacts",
      status: "Active",
    },
  },
  {
    num: 3,
    title: "Get leads & bookings",
    desc: "Every call is logged. Interested clients become leads automatically. Site visits get booked during the call.",
    icon: BarChart3,
    preview: {
      leads: 47,
      booked: 12,
      conversion: "38%",
    },
  },
];

export function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { tr } = useLanguage();

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
      id="how-it-works"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,142,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,142,233,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center sm:mb-20"
        >
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
              {tr("how.label")}
            </span>
          </div>
          <h2
            className="mx-auto max-w-[560px] text-[26px] sm:text-[32px] lg:text-[42px]"
            style={{ fontWeight: 700, color: "#0f172a", lineHeight: 1.15 }}
          >
            {tr("how.title")}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div
                className={`grid items-center gap-8 lg:gap-16 ${
                  i % 2 === 1
                    ? "lg:grid-cols-[1fr_1fr] lg:direction-rtl"
                    : "lg:grid-cols-[1fr_1fr]"
                }`}
              >
                {/* Content side */}
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-start gap-5">
                    {/* Step number + line */}
                    <div className="flex shrink-0 flex-col items-center">
                      <div
                        className="flex h-12 w-12 items-center justify-center text-[16px] text-white"
                        style={{
                          backgroundColor: "#1a8ee9",
                          fontWeight: 800,
                        }}
                      >
                        {step.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="hidden h-16 w-[2px] lg:block"
                          style={{
                            background: "linear-gradient(to bottom, rgba(26,142,233,0.3), transparent)",
                          }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <h3
                        className="mb-2 text-[20px] sm:text-[24px]"
                        style={{
                          fontWeight: 700,
                          color: "#0f172a",
                          lineHeight: 1.2,
                        }}
                      >
                        {tr(`how.step${step.num}.title`)}
                      </h3>
                      <p
                        className="mb-4 max-w-[400px] text-[14px] sm:text-[15px]"
                        style={{ color: "#64748b", lineHeight: 1.7 }}
                      >
                        {tr(`how.step${step.num}.desc`)}
                      </p>

                      {/* Icon badge */}
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5"
                        style={{
                          backgroundColor: "rgba(26,142,233,0.08)",
                          border: "1px solid rgba(26,142,233,0.15)",
                        }}
                      >
                        <step.icon size={15} color="#1a8ee9" />
                        <span
                          className="text-[12px]"
                          style={{
                            color: "#1a8ee9",
                            fontWeight: 600,
                          }}
                        >
                          Step {step.num} of 3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview card side */}
                <div
                  className={`${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div
                    className="relative overflow-hidden p-5 sm:p-6"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Card top accent */}
                    <div
                      className="absolute top-0 left-0 h-[3px] w-full"
                      style={{
                        background: "linear-gradient(90deg, #1a8ee9, rgba(26,142,233,0.3))",
                      }}
                    />

                    {/* Mini header */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="flex h-7 w-7 items-center justify-center"
                          style={{ backgroundColor: "rgba(26,142,233,0.08)" }}
                        >
                          <step.icon size={14} color="#1a8ee9" />
                        </div>
                        <span
                          className="text-[12px]"
                          style={{ color: "#64748b", fontWeight: 600 }}
                        >
                          {step.title}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: "#e2e8f0" }}
                        />
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: "#e2e8f0" }}
                        />
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: "#e2e8f0" }}
                        />
                      </div>
                    </div>

                    {/* Step 1: Table preview */}
                    {step.num === 1 && step.preview.rows && (
                      <div>
                        <div
                          className="mb-2 flex items-center gap-4 px-3 py-2"
                          style={{ backgroundColor: "#f1f5f9" }}
                        >
                          <span
                            className="flex-1 text-[11px]"
                            style={{
                              color: "#64748b",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Client Name
                          </span>
                          <span
                            className="w-24 text-[11px]"
                            style={{
                              color: "#64748b",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Location
                          </span>
                          <span
                            className="w-16 text-right text-[11px]"
                            style={{
                              color: "#64748b",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Status
                          </span>
                        </div>
                        {step.preview.rows.map((row, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-4 px-3 py-2.5"
                            style={{
                              borderBottom:
                                j < step.preview.rows!.length - 1
                                  ? "1px solid #f1f5f9"
                                  : "none",
                            }}
                          >
                            <div className="flex flex-1 items-center gap-2">
                              <div
                                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] text-white"
                                style={{
                                  backgroundColor: "#1a8ee9",
                                  fontWeight: 700,
                                }}
                              >
                                {row.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </div>
                              <span
                                className="text-[13px]"
                                style={{ color: "#0f172a", fontWeight: 500 }}
                              >
                                {row.name}
                              </span>
                            </div>
                            <span
                              className="w-24 text-[12px]"
                              style={{ color: "#64748b" }}
                            >
                              {row.tag}
                            </span>
                            <span
                              className="w-16 text-right text-[11px]"
                              style={{
                                color: "#1a8ee9",
                                fontWeight: 600,
                              }}
                            >
                              {row.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 2: Campaign card preview */}
                    {step.num === 2 && step.preview.campaign && (
                      <div>
                        <div
                          className="mb-3 p-4"
                          style={{
                            backgroundColor: "#f1f5f9",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <span
                              className="text-[14px]"
                              style={{
                                color: "#0f172a",
                                fontWeight: 600,
                              }}
                            >
                              {step.preview.campaign}
                            </span>
                            <span
                              className="px-2 py-0.5 text-[10px]"
                              style={{
                                backgroundColor: "rgba(34,197,94,0.1)",
                                color: "#22c55e",
                                fontWeight: 700,
                              }}
                            >
                              {step.preview.status}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-1.5">
                              <div
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ backgroundColor: "#1a8ee9" }}
                              />
                              <span
                                className="text-[12px]"
                                style={{ color: "#64748b" }}
                              >
                                {step.preview.lang}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ backgroundColor: "#1a8ee9" }}
                              />
                              <span
                                className="text-[12px]"
                                style={{ color: "#64748b" }}
                              >
                                {step.preview.calls}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Progress bar */}
                        <div>
                          <div className="mb-1 flex justify-between">
                            <span
                              className="text-[11px]"
                              style={{ color: "#64748b" }}
                            >
                              Campaign progress
                            </span>
                            <span
                              className="text-[11px]"
                              style={{
                                color: "#1a8ee9",
                                fontWeight: 600,
                              }}
                            >
                              67%
                            </span>
                          </div>
                          <div
                            className="h-2 w-full overflow-hidden"
                            style={{ backgroundColor: "#e2e8f0" }}
                          >
                            <motion.div
                              className="h-full"
                              style={{
                                backgroundColor: "#1a8ee9",
                              }}
                              initial={{ width: 0 }}
                              animate={visible ? { width: "67%" } : {}}
                              transition={{
                                duration: 1.2,
                                delay: 0.5,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>

                        {/* Building thumbnails */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {Object.entries(BUILDING_IMAGES).map(([key, url]) => (
                            <div
                              key={key}
                              className="relative h-16 overflow-hidden"
                              style={{ border: "1px solid #e2e8f0" }}
                            >
                              <ImageWithFallback
                                src={url}
                                alt={key}
                                className="h-full w-full object-cover"
                              />
                              <div
                                className="absolute inset-0"
                                style={{
                                  background:
                                    "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)",
                                }}
                              />
                              <span
                                className="absolute bottom-1 left-1.5 text-[8px] text-white"
                                style={{ fontWeight: 600, letterSpacing: "0.03em" }}
                              >
                                {key === "dubaiMarina"
                                  ? "Dubai"
                                  : key === "riyadhKAFD"
                                  ? "Riyadh"
                                  : "Islamabad"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Metrics preview */}
                    {step.num === 3 && step.preview.leads && (
                      <div>
                        <div className="grid grid-cols-3 gap-3">
                          <div
                            className="p-3 text-center"
                            style={{ backgroundColor: "#f1f5f9" }}
                          >
                            <p
                              className="text-[24px]"
                              style={{
                                color: "#1a8ee9",
                                fontWeight: 800,
                                lineHeight: 1,
                              }}
                            >
                              {step.preview.leads}
                            </p>
                            <p
                              className="mt-1 text-[11px]"
                              style={{ color: "#64748b" }}
                            >
                              New leads
                            </p>
                          </div>
                          <div
                            className="p-3 text-center"
                            style={{ backgroundColor: "#f1f5f9" }}
                          >
                            <p
                              className="text-[24px]"
                              style={{
                                color: "#0b5b9a",
                                fontWeight: 800,
                                lineHeight: 1,
                              }}
                            >
                              {step.preview.booked}
                            </p>
                            <p
                              className="mt-1 text-[11px]"
                              style={{ color: "#64748b" }}
                            >
                              Visits booked
                            </p>
                          </div>
                          <div
                            className="p-3 text-center"
                            style={{ backgroundColor: "#f1f5f9" }}
                          >
                            <p
                              className="text-[24px]"
                              style={{
                                color: "#22c55e",
                                fontWeight: 800,
                                lineHeight: 1,
                              }}
                            >
                              {step.preview.conversion}
                            </p>
                            <p
                              className="mt-1 text-[11px]"
                              style={{ color: "#64748b" }}
                            >
                              Conversion
                            </p>
                          </div>
                        </div>
                        {/* Mini bar chart */}
                        <div className="mt-4 flex items-end justify-between gap-1.5 px-2">
                          {[35, 52, 28, 67, 45, 73, 60, 47, 82, 55, 90, 68].map(
                            (h, j) => (
                              <motion.div
                                key={j}
                                className="flex-1"
                                style={{
                                  backgroundColor:
                                    j >= 9
                                      ? "#1a8ee9"
                                      : "rgba(26,142,233,0.2)",
                                  minWidth: 4,
                                }}
                                initial={{ height: 0 }}
                                animate={
                                  visible
                                    ? { height: `${h * 0.5}px` }
                                    : {}
                                }
                                transition={{
                                  duration: 0.6,
                                  delay: 0.8 + j * 0.04,
                                  ease: "easeOut",
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex justify-center py-8 sm:py-12 lg:py-16">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={visible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="flex h-10 w-10 items-center justify-center"
                    style={{
                      backgroundColor: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <ArrowRight
                      size={16}
                      color="#64748b"
                      style={{ transform: "rotate(90deg)" }}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
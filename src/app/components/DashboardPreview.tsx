import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  Users,
  ListChecks,
  Megaphone,
  Target,
  Phone,
  Hash,
  Calendar,
  Settings,
  Activity,
  Brain,
  FileText,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";
import svgPaths from "../../imports/svg-q3uwntprd4";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Clients" },
  { icon: ListChecks, label: "Client lists" },
  { icon: Megaphone, label: "Campaigns" },
  { icon: Target, label: "Leads" },
  { icon: Phone, label: "Call logs" },
  { icon: Hash, label: "Phone numbers" },
  { icon: Calendar, label: "Appointments" },
  { icon: Settings, label: "Settings" },
];

const highlights = [
  {
    icon: Activity,
    title: "Real-time stats",
    desc: "Track every call as it happens with live dashboards",
  },
  {
    icon: Brain,
    title: "Smart lead detection",
    desc: "AI auto-tags interested prospects from conversations",
  },
  {
    icon: FileText,
    title: "Full transcripts",
    desc: "Every conversation saved, searchable and exportable",
  },
];

const metricCards = [
  { label: "Total clients", val: "2,847", change: "+12%", color: "#1a8ee9" },
  { label: "Active campaigns", val: "12", change: "+3", color: "#0b5b9a" },
  { label: "Calls today", val: "347", change: "+28%", color: "#22c55e" },
  { label: "Leads this week", val: "89", change: "+18%", color: "#f59e0b" },
];

const recentLeads = [
  { name: "Ahmed Khan", project: "Giga Mall", time: "2 min ago", hot: true },
  { name: "Sara Noor", project: "Dubai Marina Tower", time: "8 min ago", hot: true },
  { name: "Bilal Raza", project: "KAFD Riyadh", time: "15 min ago", hot: false },
];

export function DashboardPreview() {
  const [visible, setVisible] = useState(false);
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
      id="dashboard"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5"
            style={{
              backgroundColor: "rgba(26,142,233,0.08)",
              border: "1px solid rgba(26,142,233,0.15)",
            }}
          >
            <LayoutDashboard size={13} color="#1a8ee9" />
            <span
              className="text-[12px] tracking-[0.1em] uppercase"
              style={{ color: "#1a8ee9", fontWeight: 600 }}
            >
              {tr("nav.dashboard")}
            </span>
          </div>
          <h2
            className="mx-auto mb-4 max-w-[560px] text-[26px] sm:text-[32px] lg:text-[42px]"
            style={{ fontWeight: 700, color: "#0f172a", lineHeight: 1.15 }}
          >
            {tr("dash.title")}
          </h2>
          <p
            className="mx-auto max-w-[480px] text-[15px] sm:text-[16px]"
            style={{ color: "#64748b", lineHeight: 1.7 }}
          >
            {tr("dash.desc")}
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mb-14 overflow-hidden sm:mb-20"
          style={{
            maxWidth: 1040,
            border: "1px solid #e2e8f0",
            boxShadow: "0 25px 80px rgba(0,0,0,0.1)",
          }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{
              backgroundColor: "#f1f5f9",
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <div className="flex gap-1.5">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "#ef4444" }}
              />
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "#f59e0b" }}
              />
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "#22c55e" }}
              />
            </div>
            <div
              className="mx-auto flex h-6 max-w-[300px] flex-1 items-center justify-center px-4 text-[10px]"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                color: "#64748b",
              }}
            >
              app.voiceestate.com/dashboard
            </div>
          </div>

          <div className="flex" style={{ minHeight: 340 }}>
            {/* Sidebar */}
            <div
              className="hidden w-[190px] shrink-0 p-4 md:block"
              style={{
                backgroundColor: "#0f172a",
              }}
            >
              {/* Logo + brand */}
              <div className="mb-6 flex items-center gap-2.5">
                <div className="relative shrink-0" style={{ width: 22, height: 22 }}>
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
                  <p
                    className="text-[13px] text-white"
                    style={{ fontWeight: 700 }}
                  >
                    VoiceEstate
                  </p>
                  <p
                    className="text-[9px]"
                    style={{ color: "#64748b" }}
                  >
                    AI Calling Platform
                  </p>
                </div>
              </div>
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="mb-0.5 flex items-center gap-2.5 px-3 py-2"
                  style={{
                    backgroundColor: item.active
                      ? "rgba(26,142,233,0.12)"
                      : "transparent",
                    borderLeft: item.active
                      ? "2px solid #1a8ee9"
                      : "2px solid transparent",
                    color: item.active ? "#1a8ee9" : "#64748b",
                  }}
                >
                  <item.icon size={14} />
                  <span
                    className="text-[12px]"
                    style={{ fontWeight: item.active ? 600 : 400 }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div
              className="flex-1 bg-white p-4 sm:p-5"
            >
              {/* Top bar */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3
                    className="text-[14px]"
                    style={{ fontWeight: 600, color: "#0f172a" }}
                  >
                    Dashboard overview
                  </h3>
                  <p
                    className="text-[10px]"
                    style={{ color: "#64748b" }}
                  >
                    Thursday, March 5, 2026
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[11px]"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.15)",
                    color: "#22c55e",
                    fontWeight: 600,
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  Live
                </div>
              </div>

              {/* Metric cards */}
              <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
                {metricCards.map((s) => (
                  <div
                    key={s.label}
                    className="p-3"
                    style={{
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <p
                        className="text-[9px] uppercase"
                        style={{
                          color: "#64748b",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {s.label}
                      </p>
                      <span
                        className="flex items-center gap-0.5 text-[9px]"
                        style={{ color: "#22c55e", fontWeight: 600 }}
                      >
                        <TrendingUp size={9} />
                        {s.change}
                      </span>
                    </div>
                    <p
                      className="text-[20px]"
                      style={{ fontWeight: 700, color: s.color }}
                    >
                      {s.val}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart + recent leads */}
              <div className="grid gap-2 lg:grid-cols-[1fr_220px]">
                <div
                  className="p-3"
                  style={{
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p
                      className="text-[10px]"
                      style={{ color: "#64748b" }}
                    >
                      Calls per day
                    </p>
                    <div className="flex gap-3">
                      {["7D", "30D", "90D"].map((p, idx) => (
                        <span
                          key={p}
                          className="cursor-pointer text-[9px]"
                          style={{
                            color:
                              idx === 0
                                ? "#1a8ee9"
                                : "#64748b",
                            fontWeight: idx === 0 ? 600 : 400,
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg viewBox="0 0 600 90" className="w-full">
                    <defs>
                      <linearGradient
                        id="dashGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1a8ee9"
                          stopOpacity="0.15"
                        />
                        <stop
                          offset="100%"
                          stopColor="#1a8ee9"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {[0, 150, 300, 450, 600].map((x) => (
                      <line
                        key={x}
                        x1={x}
                        y1="0"
                        x2={x}
                        y2="90"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      />
                    ))}
                    {[0, 30, 60, 90].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="600"
                        y2={y}
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      />
                    ))}
                    <path
                      d="M0 65 Q50 60, 100 50 T200 35 T300 40 T400 20 T500 25 T600 10"
                      fill="none"
                      stroke="#1a8ee9"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 65 Q50 60, 100 50 T200 35 T300 40 T400 20 T500 25 T600 10 V90 H0 Z"
                      fill="url(#dashGrad)"
                    />
                    <circle cx="500" cy="25" r="3" fill="#1a8ee9" />
                    <circle
                      cx="500"
                      cy="25"
                      r="6"
                      fill="none"
                      stroke="#1a8ee9"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                {/* Recent leads */}
                <div
                  className="p-3"
                  style={{
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p
                      className="text-[10px]"
                      style={{ color: "#64748b" }}
                    >
                      Recent leads
                    </p>
                    <ChevronRight
                      size={12}
                      color="#64748b"
                    />
                  </div>
                  {recentLeads.map((lead, j) => (
                    <div
                      key={lead.name}
                      className="flex items-center gap-2 py-2"
                      style={{
                        borderBottom:
                          j < recentLeads.length - 1
                            ? "1px solid #f1f5f9"
                            : "none",
                      }}
                    >
                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] text-white"
                        style={{
                          backgroundColor: "#1a8ee9",
                          fontWeight: 700,
                        }}
                      >
                        {lead.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="truncate text-[11px]"
                          style={{
                            color: "#0f172a",
                            fontWeight: 500,
                          }}
                        >
                          {lead.name}
                        </p>
                        <p
                          className="text-[9px]"
                          style={{ color: "#64748b" }}
                        >
                          {lead.project}
                        </p>
                      </div>
                      {lead.hot && (
                        <span
                          className="shrink-0 text-[8px]"
                          style={{
                            color: "#f59e0b",
                            fontWeight: 700,
                          }}
                        >
                          HOT
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                border: "1px solid #e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1a8ee9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center"
                style={{
                  backgroundColor: "rgba(26,142,233,0.08)",
                }}
              >
                <h.icon size={20} color="#1a8ee9" />
              </div>
              <div>
                <h4
                  className="mb-1 text-[15px]"
                  style={{ fontWeight: 700, color: "#0f172a" }}
                >
                  {h.title}
                </h4>
                <p
                  className="text-[13px]"
                  style={{
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
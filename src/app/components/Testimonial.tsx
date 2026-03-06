import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

const testimonialKeys = [1, 2, 3, 4];
const metrics = ["142", "8", "100%", "9x"];
const metricLabels = ["Leads Re-engaged", "Site Visits Booked", "ROI Increase", "Faster Lead Qual"];

export function Testimonial() {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { tr, lang } = useLanguage();

  const isRtl = lang === "ar";

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <span
            className="mb-3 inline-block px-3 py-1 text-[12px] sm:text-[13px]"
            style={{
              backgroundColor: "rgba(26,142,233,0.1)",
              border: "1px solid rgba(26,142,233,0.15)",
              color: "#1a8ee9",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {tr("testimonial.badge")}
          </span>
          <h2
            className="text-[24px] sm:text-[32px] lg:text-[40px]"
            style={{ fontWeight: 600, lineHeight: 1.2, color: "#0f172a" }}
          >
            {tr("testimonial.title")}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative" dir="ltr">
          <Slider ref={sliderRef} {...settings}>
            {testimonialKeys.map((num, idx) => (
              <div key={num}>
                <div dir={isRtl ? "rtl" : "ltr"} className="grid items-center gap-8 md:grid-cols-[1fr_320px] lg:gap-12">
                  {/* Left: Quote content */}
                  <div className="relative px-2 sm:px-4">
                    {/* Quote icon */}
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14"
                      style={{ backgroundColor: "rgba(26,142,233,0.08)" }}
                    >
                      <Quote size={24} color="#1a8ee9" />
                    </div>

                    {/* Beta Verified Tag */}
                    <div className="mb-5 flex items-center gap-1.5 w-fit rounded-full px-2.5 py-1" style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}>
                      <div className="flex items-center justify-center w-4 h-4 rounded-full" style={{ backgroundColor: "#10b981" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: "#059669" }}>
                        Verified Beta User
                      </span>
                    </div>

                    {/* Quote text */}
                    <blockquote
                      className="mb-8 text-[17px] sm:text-[20px] lg:text-[22px]"
                      style={{
                        color: "#0f172a",
                        lineHeight: 1.7,
                        fontWeight: 400,
                      }}
                    >
                      "{tr(`testimonial.${num}.quote`)}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] text-white"
                        style={{
                          background: "linear-gradient(135deg, #1a8ee9, #0b5b9a)",
                          fontWeight: 600,
                        }}
                      >
                        {tr(`testimonial.${num}.name`).split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p
                          className="text-[15px] flex items-center gap-1.5"
                          style={{ fontWeight: 600, color: "#0f172a" }}
                        >
                          {tr(`testimonial.${num}.name`)}
                        </p>
                        <p
                          className="text-[13px]"
                          style={{ color: "#64748b" }}
                        >
                          {tr(`testimonial.${num}.role`)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metric highlight card */}
                  <div className="flex justify-center md:justify-end">
                    <div
                      className="relative w-full max-w-[280px] p-8 text-center sm:p-10"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 h-1 w-full"
                        style={{ backgroundColor: "#1a8ee9" }}
                      />
                      <p
                        className="mb-2 text-[48px] sm:text-[56px]"
                        style={{
                          fontWeight: 600,
                          color: "#1a8ee9",
                          lineHeight: 1,
                        }}
                      >
                        {metrics[idx]}
                      </p>
                      <p
                        className="text-[14px]"
                        style={{
                          color: "#64748b",
                          fontWeight: 500,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {metricLabels[idx]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Bottom controls */}
          <div className="mt-10 flex items-center justify-between sm:mt-14">
            {/* Slide indicators */}
            <div className="flex gap-2">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  onClick={() => sliderRef.current?.slickGoTo(i)}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    width: activeSlide === i ? 32 : 8,
                    height: 8,
                    backgroundColor:
                      activeSlide === i
                        ? "#1a8ee9"
                        : "#e2e8f0",
                    border: "none",
                  }}
                />
              ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex gap-2">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-200 sm:h-11 sm:w-11"
                style={{
                  border: "1px solid #e2e8f0",
                  background: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f1f5f9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <ChevronLeft size={18} color="#64748b" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-200 sm:h-11 sm:w-11"
                style={{ backgroundColor: "#1a8ee9", border: "none" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0b5b9a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1a8ee9")
                }
              >
                <ChevronRight size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slick-slide > div {
          padding: 0 4px;
        }
      `}</style>
    </section>
  );
}
import { useParams, Navigate } from "react-router";
import { LanguageProvider } from "../i18n/LanguageContext";
import { type Lang, langConfig } from "../i18n/translations";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { HowItWorks } from "./HowItWorks";
import { DashboardPreview } from "./DashboardPreview";
import { FeaturesGrid } from "./FeaturesGrid";
import { StatsBar } from "./StatsBar";
import { Testimonial } from "./Testimonial";
import { Footer } from "./Footer";
import { FooterNew } from "./FooterNew";
import { WaitlistNotification } from "./WaitlistNotification";

const validLangs: Lang[] = ["en", "ar", "ur"];

export function LandingPage() {
  const { lang } = useParams<{ lang: string }>();

  if (!lang || !validLangs.includes(lang as Lang)) {
    return <Navigate to="/en" replace />;
  }

  const currentLang = lang as Lang;
  const config = langConfig[currentLang];

  return (
    <LanguageProvider lang={currentLang}>
      <div
        className="min-h-screen w-full"
        dir={config.dir}
        style={{ fontFamily: config.font }}
      >
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <DashboardPreview />
        <FeaturesGrid />
        <StatsBar />
        <Testimonial />
        <Footer />
        <FooterNew />
        <WaitlistNotification />
      </div>
    </LanguageProvider>
  );
}
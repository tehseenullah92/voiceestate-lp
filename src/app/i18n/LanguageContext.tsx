import { createContext, useContext } from "react";
import { type Lang, t, langConfig } from "./translations";

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  font: string;
  tr: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  dir: "ltr",
  font: "'Inter', sans-serif",
  tr: (key: string) => key,
});

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const config = langConfig[lang];
  const tr = (key: string) => t[lang][key] ?? t["en"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, dir: config.dir, font: config.font, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

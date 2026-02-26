import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Locale = "pt" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (translations: Record<Locale, string>) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

const DEFAULT_LOCALE: Locale = "pt";
const STORAGE_KEY = "app_locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [localeState, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, DEFAULT_LOCALE);
      return DEFAULT_LOCALE;
    }
    return stored;
  });

  function setLocale(newLocale: Locale) {
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);
  }

  // Função de tradução: recebe um objeto com as strings e retorna a do idioma atual
  function t(translations: Record<Locale, string>): string {
    return translations[localeState] ?? translations[DEFAULT_LOCALE];
  }

  const localeObject = useMemo(
    () => ({ locale: localeState, setLocale, t }),
    [localeState],
  );

  return (
    <I18nContext.Provider value={localeObject}>{children}</I18nContext.Provider>
  );
}

// Uso:
// translations.ts → greeting: { pt: "Olá, {name}!", en: "Hello, {name}!" }
// componente → interpolate(t(tx.greeting), { name: "João" })
export function interpolate(template: string, vars: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? key);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

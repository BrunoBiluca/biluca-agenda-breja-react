import { useI18n } from "./i18n-context";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div>
      <button
        onClick={() => setLocale("pt")}
        style={{ fontWeight: locale === "pt" ? "bold" : "normal" }}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        style={{ fontWeight: locale === "en" ? "bold" : "normal" }}
      >
        EN
      </button>
    </div>
  );
}

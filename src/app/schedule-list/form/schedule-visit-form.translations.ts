import type { Locale } from "@app/common/i18n/i18n-context";

export const tx = {
  validationDate: {
    pt: "Data inválida",
    en: "Invalid date",
  },
  validationGuests: {
    pt: "Adicione pelo menos um convidado",
    en: "Add at least one guest",
  },
  title: {
    pt: "Agendar visita à",
    en: "Schedule visit to",
  },
  visitDate: {
    pt: "Data da visita",
    en: "Visit date",
  },
  guests: {
    pt: "Convidados",
    en: "Guests",
  },
  guestsDescription: {
    pt: "Digite e pressione Enter para adicionar um convidado",
    en: "Press Enter to add a guest",
  },
  observations: {
    pt: "Observações",
    en: "Observations",
  },
  observationsPlaceholder: {
    pt: "Ex: alguma restrição alimentar, etc.",
    en: "Ex: any dietary restrictions, etc.",
  },
  confirm: {
    pt: "Confirmar agendamento",
    en: "Confirm booking",
  },
  back: {
    pt: "Voltar",
    en: "Back",
  },
} satisfies Record<string, Record<Locale, string>>;

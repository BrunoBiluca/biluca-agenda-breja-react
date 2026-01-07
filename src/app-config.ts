export function isStandalone() {
  return import.meta.env.VITE_STANDALONE === "true";
}

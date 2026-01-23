export class StandaloneModeConfig {
  static isStandalone() {
    return import.meta.env.VITE_STANDALONE === "true";
  }
}

export function isStandalone() {
  return import.meta.env.VITE_STANDALONE === "true";
}

export function defaultSetting(key: string, value: any) {
  if (getSetting(key)) return;
  storeSetting(key, value);
}

export function storeSetting(key: string, value: any) {
  key = formatStandaloneKey(key);
  localStorage.setItem(key, value);
}

export function getSetting<T>(key: string) {
  key = formatStandaloneKey(key);
  return localStorage.getItem(key) as T;
}

export function getSettingNumber(key: string): number {
  key = formatStandaloneKey(key);

  let value = localStorage.getItem(key);

  if (value === "inf") {
    return 2147483647;
  }

  return parseInt(value as string);
}

export function clear() {
  for (const key in localStorage) {
    if (key.startsWith(standalone_settings_prefix)) {
      localStorage.removeItem(key);
    }
  }
}

const standalone_settings_prefix = "standalone";

function formatStandaloneKey(key: string) {
  return `${standalone_settings_prefix}.${key}`;
}

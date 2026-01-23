import { defaultSetting, getSettingNumber } from "./standalone-mode";

export function delay(callback: () => any, specificKey?: string): Promise<any> {
  const delayKey = formatSpecficStandaloneKey("delay", specificKey);
  defaultSetting(delayKey, 1000);
  const timeout = getSettingNumber(delayKey);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, timeout);
  });
}

function formatSpecficStandaloneKey(key: string, specificKey?: string) {
  if (!specificKey) return key;
  return `${key}.${specificKey}`;
}

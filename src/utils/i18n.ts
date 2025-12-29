// import { getRelativeLocaleUrl } from 'astro:i18n';

// Import translation files
import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

export const languages = {
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'en';

export const translations = {
  en,
  zh,
} as const;

export type SupportedLanguage = keyof typeof translations;

// Helper function to get nested translation keys
function getNestedTranslation(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce<Record<string, unknown> | string | undefined>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return current[key] as Record<string, unknown> | string;
    }
    return undefined;
  }, obj);
  return (typeof result === 'string' ? result : undefined) || path;
}

export function useTranslations(lang: SupportedLanguage = defaultLang) {
  return function t(key: string): string {
    const translation = getNestedTranslation(translations[lang], key);
    return translation || getNestedTranslation(translations[defaultLang], key) || key;
  };
}

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as SupportedLanguage;
  return defaultLang;
}

export function getLocalizedUrl(url: string, targetLang: SupportedLanguage): string {
  if (targetLang === defaultLang) {
    // For default language, remove language prefix
    return url.replace(/^\/zh/, '') || '/';
  } else {
    // For non-default language, add language prefix
    const cleanUrl = url.replace(/^\/zh/, '') || '/';
    return `/${targetLang}${cleanUrl === '/' ? '' : cleanUrl}`;
  }
}

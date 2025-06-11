import { SITE } from 'astrowind:config';
import { getPermalink } from './utils/permalinks';
import { useTranslations, type SupportedLanguage, getLocalizedUrl } from './utils/i18n';
import type { Props as HeaderProps } from './components/widgets/Header.astro';
import type { Props as FooterProps } from './components/widgets/Footer.astro';

export function getHeaderData(lang: SupportedLanguage = 'en') {
  const t = useTranslations(lang);
  
  // Create localized URLs based on the current language
  const localizeUrl = (path: string) => {
    const baseUrl = getPermalink(path);
    return getLocalizedUrl(baseUrl, lang);
  };
  
  return {
    links: [
      {
        text: t('nav.incorporation'),
        href: localizeUrl('/incorporation'),
      },
      {
        text: t('nav.accounting'),
        href: localizeUrl('/accounting'),
      },
      {
        text: t('nav.taxAdvisory'),
        href: localizeUrl('/tax-advisory'),
      },
      {
        text: t('nav.payroll'),
        href: localizeUrl('/payroll'),
      },
      {
        text: t('nav.companySecretary'),
        href: localizeUrl('/company-secretary'),
      },
      {
        text: t('nav.aboutUs'),
        href: localizeUrl('/about'),
      },
    ],
    actions: [{ variant: 'secondary', text: t('nav.contactUs'), href: localizeUrl('/contact') }],
  } as HeaderProps;
}

export const headerData = getHeaderData();

export function getFooterData(lang: SupportedLanguage = 'en') {
  const t = useTranslations(lang);
  
  // Create localized URLs based on the current language
  const localizeUrl = (path: string) => {
    const baseUrl = getPermalink(path);
    return getLocalizedUrl(baseUrl, lang);
  };
  
  return {
    links: [],
    actions: [{ variant: 'primary', text: t('nav.contactUs'), href: localizeUrl('/contact') }],
    descriptions: [t('footer.address'), t('footer.uen')],
    secondaryLinks: [
      { text: t('footer.terms'), href: localizeUrl('/terms') },
      { text: t('footer.privacy'), href: localizeUrl('/privacy') },
    ],
    socialLinks: [
      {
        ariaLabel: 'linkedin',
        icon: 'tabler:brand-linkedin',
        href: 'https://www.linkedin.com/company/solidago-advisory-pte-ltd/',
      },
    ],
    footNote: `${SITE?.legalName} ${t('footer.copyright')}`,
  } as FooterProps;
}

export const footerData = getFooterData();

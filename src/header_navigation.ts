import { SITE } from 'astrowind:config';
import { getPermalink } from './utils/permalinks';
import type { Props } from './components/widgets/Header.astro';

export const headerData = {
  links: [
    {
      text: 'Incorporation',
      href: getPermalink('/incorporation'),
    },
    {
      text: 'Accounting',
      href: getPermalink('/accounting'),
    },
    {
      text: 'Tax Advisory',
      href: getPermalink('/tax-advisory'),
    },
    {
      text: 'Payroll',
      href: getPermalink('/payroll'),
    },
    {
      text: 'Company secretary',
      href: getPermalink('/company-secretary'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ variant: 'secondary', text: 'Contact us', href: getPermalink('/contact') }],
} as Props;

export const footerData = {
  links: [],
  actions: [{ variant: 'primary', text: 'Contact us', href: getPermalink('/contact') }],
  descriptions: ['101 Cecil Street, #20-07, Tong Eng Building, Singapore 069533', 'UEN: 202310293N'],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'inkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/solidago-advisory-pte-ltd/',
    },
  ],
  footNote: `${SITE?.legalName} © 2025`,
} as Props;

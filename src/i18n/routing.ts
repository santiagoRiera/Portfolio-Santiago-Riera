import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
//Navigation APIs: Lightweight wrappers around Next.js’ navigation APIs like <Link />
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  pathnames: {
    '/resume': {
      en: '/resume',
      es: '/resumen'
    },
    '/work': {
      en: '/work',
      es: '/trabajo'
    },
    '/contact': {
      en: '/contact',
      es: '/contacto'
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
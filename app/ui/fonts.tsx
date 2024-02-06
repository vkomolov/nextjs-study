import { Aclonica, Inter, Lusitana } from 'next/font/google';
// ? has className: string, style: Object properties

/**
 * Next.js automatically optimizes fonts in the application when you use the next/font module.
 * It downloads font files at build time and hosts them with your other static assets.
 * @ This means when a user visits your application, there are no additional network requests for fonts
 * which would impact performance.
 *
 * In your /app/ui folder, create a new file called fonts.ts.
 * You'll use this file to keep the fonts that will be used throughout your application.
 *
 * Import the Inter font from the next/font/google module - this will be your primary font.
 * Then, specify what subset you'd like to load. In this case, 'latin':
 *
 */

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
export const lusitana = Lusitana({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lusitana',
});
export const aclonica = Aclonica({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-aclonica',
});

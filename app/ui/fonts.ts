import { Rubik } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const rubik = Rubik({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-lusitana',
});

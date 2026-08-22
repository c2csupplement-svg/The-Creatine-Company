import localFont from 'next/font/local';
import { Anton, Space_Mono } from 'next/font/google';

export const anton = Anton({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const mono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export const victory = localFont({
    src: '../../public/fonts/VictoryStrikerSansDemoReg-OGmV4.otf',
    display: 'swap',
    variable: '--font-victory',
});
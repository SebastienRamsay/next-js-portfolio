import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '../../context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '../../context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sebastien | Personal Portfolio',
  description:
    'Sebastien is an entry level developer learning react/node framworks with 2 years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} daerk:text-opacity-90 bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
        suppressHydrationWarning={true}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="dark:bg-[#676394] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import Header from '@/components/header/header';
import Provider from '@/components/provider';
import ScrollUpButton from '@/components/scroll-up-button';
import '@/styles/globals.css';
import '@/styles/paginate.css';
import { Analytics } from '@vercel/analytics/react';
import {Space_Grotesk} from '@next/font/google'


export const metadata = {
  title: {
    default: 'Isaac Almanza',
    template: '%s | Isaac Almanza',
  },
};
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="text-primary bg-primary relative mx-auto mb-20 flex w-full max-w-screen-xl flex-col px-[6vw] md:px-[5vw]">
        <Provider>
          <Header />
          <main className={space_grotesk.className}>{children}</main>
          <div className="fixed bottom-12 right-10">
            <ScrollUpButton />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}

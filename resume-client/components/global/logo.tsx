/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Logo = ({ url }: { url: string }) => {
  return (
    <div
      className={`text-5xl text-primary font-bold ${dancingScript.className}`}
    >
      Resume
    </div>
  );
};

export default Logo;

import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const dinPro = localFont({
  src: [
    {
      path: './font/DIN Pro Light 300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Light Italic 300.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './font/DIN Pro 400.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Italic 400.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Medium 500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Medium Italic 500.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Bold 700.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Bold Italic 700.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Black 900.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Black Italic 900.otf',
      weight: '900',
      style: 'italic',
    },
  ],
})

export const dinProCondensed = localFont({
  src: [
    {
      path: './font/DIN Pro Condensed Light 300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Condensed Light Italic 300.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Condensed Regular 400.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Condensed Italic 400.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Condensed Medium 500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Condensed Medium Italic 500.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Condensed Bold 700.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Condensed Bold Italic 700.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './font/DIN Pro Condensed Black 900.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './font/DIN Pro Condensed Black Italic 900.otf',
      weight: '900',
      style: 'italic',
    },
  ],
})


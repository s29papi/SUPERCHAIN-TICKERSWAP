import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
   

const FRAMES_URL = 'https://superchain-tickerswap.vercel.app';
const imageUrl = new URL("/og/instalframe", FRAMES_URL).href
const postUrl = new URL("/", FRAMES_URL).href

const frameMetadata = getFrameMetadata({
  buttons: [
    {label: 'Install 🔂ARB-TICKERSWAP Cast Action', action: 'link', target: 'https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Farb-tickerswap.vercel.app%2Fapi%2Faction%2FgetMetadata'},
  ],
  image: {
    src: imageUrl,
    aspectRatio: '1.91:1'  
  },
  post_url: postUrl,

});

export const metadata: Metadata = {
  title: 'Frame Install arb-tickerswap Cast Action.',
  description: 'A frame used to install arb-tickerswap Cast Action.',
  openGraph: {
    title: 'Frame Install arb-tickerswap Cast Action.',
    description: 'A frame used to install arb-tickerswap Cast Action.',
    images: [imageUrl],
  },
  other: {
    'of:accepts:xmtp': '2024-02-01',
    ...frameMetadata,
  },
};

export default async function Page() {
  return (<div>🔂 Arb-TickerSwap</div>)
}
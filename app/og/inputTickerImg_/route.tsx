/* eslint-disable @next/next/no-img-element  */
// @ts-nocheck
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
    
    let textOne = "> Input Ticker E.g $WBTC or $WETH"
    return new ImageResponse(
        (
            <div tw='w-full h-full'
            style={{
              alignItems: 'center',
              background: 'black',
              backgroundSize: '100% 100%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              height: '100%',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <div
                 tw='flex flex-col'
            >
                <div tw='flex justify-center'>
                    <div tw='flex rounded-[34px] font-extrabold p-8 pr-72  bg-[#1B1B1B] bg-opacity-80 shadow-lg text-4xl text-white tracking-wide  w-full max-w-[1000px]'>
                        {textOne}
                    </div> 
                </div>
                

                <div 
                    tw="flex justify-center top-12"
                    style={{
                        fontSize: 20,
                        letterSpacing: '-0.009em',
                        lineHeight: 1.4,
                        marginTop: 30,
                        padding: '0 120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                   🔂 TICKERSWAP
                </div>
            </div>
          </div>
        ),
    )
}
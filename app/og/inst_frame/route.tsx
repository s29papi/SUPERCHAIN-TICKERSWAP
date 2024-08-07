/* eslint-disable @next/next/no-img-element  */
// @ts-nocheck
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
    const STATEMENT_1 = 'TICKERSWAP';
    const STATEMENT_2 = "Swap. Buy. Gasless Trades In-Frame On The Superchain.";
    // const fontData1 = await fetch(
    //     new URL('../../../public/Roboto-Bold.ttf', import.meta.url),
    // ).then((res) => res.arrayBuffer());

    
    return new ImageResponse(
        (
            <div
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

          <div tw='flex justify-center'>
                <div tw='flex rounded-[40px] font-extrabold top-20 p-12 pr-72 pb-[466px]  bg-[#1B1B1B] bg-opacity-80 shadow-lg text-white tracking-wide  w-full max-w-[1300px]'>
                    <div tw='flex flex-col top-85'>
                        <div tw='flex'
                            style={{
                                fontSize: 71
                            }}
                        >
                            {STATEMENT_1}
                        </div>
                        <div tw='flex'>
                            {STATEMENT_2}
                        </div>
                    </div>
                </div> 
          </div>
                {/* <div 
                    tw="flex"
                    style={{
                        color: '#FFFFFF',
                        fontSize: 80,
                        fontStyle: '"Roboto"',
                        letterSpacing: '-0.009em',
                        lineHeight: 1.4,
                        marginTop: 30,
                        padding: '0 120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                 
                   🔂 TICKERSWAP
                
            {/* </div> */}
          </div>
        ),
        // {
        //     fonts: [
        //         {
        //             name: 'Roboto',
        //             data: fontData1,
        //             style: 'normal',
        //             weight: 900
        //         }
        //     ]
        // }
    )
}
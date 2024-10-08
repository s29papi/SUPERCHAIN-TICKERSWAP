/* eslint-disable @next/next/no-img-element  */
// @ts-nocheck
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
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
                            {/* 
                                Function: Flex box outside inner rounded box edge.
                            */}
                <div 
                    tw='
                        flex 
                        justify-center
                        '
                >
                             {/* 
                                Function: inner rounded box edge.
                             */}
                    <div 
                        tw='
                            flex 
                            rounded-[99px] 
                            font-extrabold 
                            top-59        
                            p-12 
                            pr-72 
                            pb-[466px]  
                            bg-[#1B1B1B] 
                            bg-opacity-80 
                            shadow-lg 
                            text-white 
                            tracking-wide  
                            w-full 
                            max-w-[1300px]
                            '
                    >
                             {/* 
                                Function: Wrapper around both texts, set the flex direction and distance from the top.
                            */}
                        <div 
                            tw='
                                flex 
                                flex-col 
                                top-39
                                '
                        >
                            {/* 
                                TEXT: TICKERSWAP
                                Function: Handles text font i.e. styling, sizing.
                            */}
                            <div 
                                tw='
                                    flex
                                '
                                    style={{
                                        fontSize: 106,
                                        fontWeight: 'bolder'
                                    }}
                            >
                                {"TICKERSWAP"}
                            </div>
                            {/* 
                                TEXT: Swap. Buy. Gasless Trades In-Frame On The Superchain.
                                Function: Handles text font i.e. styling, sizing.
                            */}
                            <div 
                                tw='
                                    flex
                                '
                                    style={{
                                        fontSize: 26
                                    }}
                            >
                                {"Swap. Buy. Gasless Trades In-Frame On The Superchain."}
                            </div>
                        </div>
                    </div> 
                </div>
          </div>
        )
    )
}
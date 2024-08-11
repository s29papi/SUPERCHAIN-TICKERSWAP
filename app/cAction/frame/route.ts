import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    let imageUrl = "https://superchain-tickerswap.vercel.app/og/inputTickerImg_";
    let viewAndApproveBuyTxUrl = "https://superchain-tickerswap.vercel.app/cAction/frame"
    
    return new NextResponse(
            `<!DOCTYPE html><html><head>
            <title>🔂ARB-TICKERSWAP Frame</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="of:accepts:xmtp" content="2024-02-01" /> 
            <meta property="og:image" content="${imageUrl}"/>
            <meta property="fc:frame:image" content="${imageUrl}"/>
            <meta property="fc:frame:input:text" content="> $Ticker"/>
            <meta property="fc:frame:button:1" content="Buy" />
            <meta property="fc:frame:button:1:action" content="post"/>
            <meta property="fc:frame:button:2" content="Sell" />
            <meta property="fc:frame:button:2:action" content="post"/>
            <meta property="fc:frame:post_url" content="${viewAndApproveBuyTxUrl}"/>
            </head></html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      },
    );
}

export const GET = POST;
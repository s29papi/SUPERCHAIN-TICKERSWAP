import { NextRequest, NextResponse } from 'next/server';

type Action = {
    type: string;
}

type ActionDefination = {
    name: string;
    icon: string;
    description: string;
    maboutUrl?: string;
    action: Action;
};

export async function getResponseGET(req: NextRequest): Promise<NextResponse> {
    const actionDefination: ActionDefination = {
        name: '🔂SUPERCHAIN-TICKERSWAP',
        icon: 'dot',
        description: "View the current price of an Asset, and also gaslessly purchase and sell it with $USDC.",
        action: <Action> {
            type: 'post'
        } 
    }
    return NextResponse.json(actionDefination, { status: 200 });
}
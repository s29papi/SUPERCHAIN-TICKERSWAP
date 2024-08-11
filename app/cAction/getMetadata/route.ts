import { NextRequest, NextResponse } from 'next/server';
import { getResponseGET } from './util/_get';
import { getResponsePOST } from './util/_post';

export async function GET(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
    if (req.method == 'POST') {
         return getResponsePOST(req)
    }
    return getResponseGET(req)
}
 
export const dynamic = 'force-dynamic';
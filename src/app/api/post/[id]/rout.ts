import { NextRequest,NextResponse } from "next/server";

export default function GET(request:
    NextRequest,{ params }: any){
    console.log(params)
    const id  = params.id

    return NextResponse.json({id})
}

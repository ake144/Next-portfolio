import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({
    'hello': 'gedi',
    NO: 1
  })

}
 
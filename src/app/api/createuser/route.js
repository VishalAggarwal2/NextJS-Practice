import { NextResponse } from "next/server";

export async function POST(request){
const body=  await request.json();
console.log(body);
console.log("from backend");
const response = NextResponse.json({
    message:"from create user"
})
return response;
}
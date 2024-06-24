import connectdb from "@/helper/dbconnection";
import { NextResponse } from "next/server";
import user from "@/Models/user";
connectdb();
export async function GET(request){
    const response = NextResponse.json({
        message:"hello from user route"
    })
    const newUser = new user({
        name: 'John Doe',
        phone: 1234567890,
        email: 'john@example.com',
        password: 'password',
        about: 'About John Doe',
      });
    response.cookies.set("nextjstoken", "token");
    return response;
}
import task from "@/Models/task";
import { NextResponse } from "next/server";
export async function GET(request){
    const response = NextResponse.json({
        message:"hello from task route"
    })
    const newTask = new task({
        title:"hello",
        dsc:"hill",
        iscomp:true
      });
newTask.save();
    response.cookies.set("nextjstoken", "token");
    return response;
}
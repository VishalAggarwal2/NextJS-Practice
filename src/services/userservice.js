"use server"
import { httpAxios } from "@/helper/httpaxios";
import axios from "axios";

export async function loginuser() {
    try {
    } catch (error) {
        // Handle 
        console.error("Error while logging in user:", error);
        throw error;
    }
}

export async function createuser(data){
    try {
        const res = await httpAxios.post("/api/createuser", data);
        return res.data;
      } catch (error) {
        // Handle errors here if necessary
        console.error("Error creating user:", error);
        throw error; // Rethrow the error for the caller to handle if necessary
      }
}
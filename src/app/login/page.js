"use client"
import { loginuser } from '@/services/userservice'
import React from 'react'
const page = () => {
  return (
    <div>
      login
      <button style={{
        border: "solid white",
        margin:"3rem"
      }} onClick={async()=>{
         const response = await loginuser();
         console.log(response);
      }}>
        click me
      </button>
    </div>
  )
}

export default page

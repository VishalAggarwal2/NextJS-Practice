"use client"
import { createuser } from '@/services/userservice';
import React, { useState } from 'react'

const signup = () => {
  const [data,setData]= useState({});
  const onChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  
  }
  const onSumbit=async()=>{
    const res = await createuser(data);
console.log("from frontend");
console.log(res);
  }
  return (
    <div style={{color:"black"}}>
      <input type="text" onChange={onChange} name="phone" placeholder='enter phone' />
      <input type="text" onChange={onChange}name="email" placeholder='enter email' />
      <input type="text" onChange={onChange}  name="name" placeholder='enter name' />
      <input type="text" onChange={onChange}name="password" placeholder='enter password' />
      <button onClick={onSumbit}>sumbit</button>
    </div>
  )
}

export default signup

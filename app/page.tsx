"use client"
import React, { useState } from 'react'

const page = () => {
   const [Name,setName]= useState("")
  return (
    <div>
      <h1>Enter your name</h1>
      <form ><input type="text"
      value={Name}
      className='h-8 w-15 border-2 border-black text-xl' 
      onChange={(e)=>{
setName(e.target.value)
      }}
      /></form>
    </div>
  )
}

export default page

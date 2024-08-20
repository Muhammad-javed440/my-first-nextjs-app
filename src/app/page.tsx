'use client';
import Image from "next/image";
import { useState } from "react";
import PropsText from "./components/PropsText";
export default function Home() {

  const [inputVal, setInputVal] = useState("")
  const [radioVal, setRadioVal] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex gap-10  justify-center py-5 px-5 ">
       
       
       <h1 className="bg-green-300 text-pretty">
        Hello, I am Muhammad Javed and this is my first Next.js project.</h1>
        </div>
        <div>
        <h1>On Change Event</h1>

        <input type='text' placeholder='Please write something here'
         className='border text-[30px]'
         value={inputVal}
         onChange={(e)=>{setInputVal(e.target.value)}}/>
         <div className='flex flex-col justify-between mx-auto'> 
         <label>
         <input type='radio' value='Haan' name='abc'
         onChange={(e)=>{setRadioVal(e.target.value)}}/> yes
         </label>
         <br/>
         <label>
         <input type='radio' value='Nahi' name='abc'
         onChange={(e)=>{setRadioVal(e.target.value)}}/> no
         </label> 
         
         <br/>
        
         <p className='border text-blue-950 text-[30px] py-10 mt-5 px-5'>{inputVal} {radioVal}</p>
         </div>
        </div>

        <div>
          <h1>Props</h1>
          <PropsText name='Muhammad Javed'/>
          <PropsText name='Muhammad Ali'/>
          <PropsText name='Muhammad Ibrahim'/>
          <PropsText name='Muhammad Usman'/>
        </div>
     </main>
  );
}

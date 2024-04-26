import logo from '../assets/logo.svg'
import { useContext,useState,useEffect } from 'react'
import { scoreContext } from '../context/context'
const Scores = ()=>{
  console.log("score component rendered")
    const {score,setscore} = useContext(scoreContext);
    return (
<>
  <section className=" ">
<div className="flex justify-between border-4 w-[90%] mx-auto rounded-xl p-4 border-[#606e85]">
    <div className="font-barlow-semi-condensed font  ">
        <img src={logo} className=' h-[80px] ' alt="" />
    </div>
    <div className="font-barlow-semi-condensed  border bg-white h-[80px] w-[80px] rounded-xl flex flex-col justify-center items-center leading-7">
        <p className="text-[16px] text-[#2a46c0]">Scores</p>

    <p className="font-[700]  text-[32px] text-[#3b4363]">{score}</p>
    </div>
</div>
  </section>
        </>
    )
}

export default Scores
import rule from '../assets/rules.svg'
import  close from '../assets/close.svg'
import { useContext } from 'react'
import { countContext } from '../context/context'
const Rules = ()=>{
    const {count,setcount} = useContext(countContext)
   const go_back = ()=>{
   setcount(0)
   }
    return(
        <>
        <section>
            <div className='  text-center mt-16  '>
            <p className='font-barlow-semi-condensed text-[32px] font-[400] '>Rules</p>
            </div>

            <div className='mt-20   flex justify-center'>
                <img src={rule} alt="" />
            </div>
            <div className='mt-32 flex justify-center cursor-pointer'>
<div className=' ml-8' onClick={go_back}>
<img src={close} alt="" className=''/>
</div>
            </div>
        </section>
        </>
    )
}

export default Rules;
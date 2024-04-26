import { useContext , useEffect, useState} from 'react'
import pentagon from '../assets/pentagon.svg'
import imagePaths from '../utils/imagePaths'
import Card from '../components/card'
import { computerContext, pathContext } from '../context/context';
import  {choosenContext} from '../context/context';
import { plindexContext } from '../context/context';
import { compindexContext } from '../context/context';
import { resultContext } from '../context/context';
import { countContext } from '../context/context';
const Pick = ()=>{
const {setchoosen} = useContext(choosenContext);
const {setcomputer} = useContext(computerContext);
const {plindex,setplindex} = useContext(plindexContext);
const {compindex,setcompindex} = useContext(compindexContext);

const {result,setresult} = useContext(resultContext);
const paths = useContext(pathContext);
const {count,setcount} = useContext(countContext);


const pick = (index)=>{
setchoosen(()=>{
  return paths[index].path
});
setplindex(index);


const indx = Math.floor(Math.random()* (4-0+1))+0;



for(let i=0;i<1000000;i++){

}
setcomputer(paths[indx].path)
  setcompindex(indx);

setcount((prev)=>{
  return prev+1;
})


}

    return (<>
<section>
<div className='  mx-auto sm:w-[80%]  md:w-[60%]   lg:w-[40%]  xs:w-[75%]'>
<div className='bg-no-repeat bg-center min-h-80 flex' style={{backgroundImage:`url(${pentagon})`}}>
  <div className='w-[20%]'>   
    <div className=' min-h-20 '></div>
    <div className=' min-h-32 relative right-2  sm:right-8 sm:top-1'><Card  img={paths[0].path} pick={()=>pick(0)} index={0} ></Card>
    </div>
    <div className=' min-h-32'></div>
  </div>          
  <div className='w-[20%]'>
    <div className=' min-h-20'></div>
    <div className=' min-h-32'></div>
    <div className=' min-h-32 relative right-6 top-10'><Card img={paths[1].path} pick={()=>pick(1)} index={1}></Card></div>
</div>
  <div className='w-[20%]'>
 <div className=' min-h-20 relative right-2  bottom-6'><Card img={paths[2].path} pick={()=>pick(2)} index={2}></Card></div>
    <div className=' min-h-32 '></div>
    <div className=' min-h-32'></div>
     </div>
  <div className=' w-[20%]'>

  <div className=' min-h-20 '></div>
    <div className=' min-h-32 '></div>
    <div className=' min-h-32 relative left-6 top-10'><Card img={paths[3].path} pick={()=>pick(3)} index={3}></Card></div>
    
    </div>
  <div className=' w-[20%]'>

  <div className=' min-h-20 '></div>
    <div className=' min-h-32 relative '><Card  img={paths[4].path} pick={()=>pick(4)} index={4}></Card>
    </div>
    <div className=' min-h-32'></div>
  </div>


  </div>
</div>
</section>
    </>
    )
}





export default Pick;
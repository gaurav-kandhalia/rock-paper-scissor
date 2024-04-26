import Card from '../components/card'
import { useContext, useState, useEffect } from 'react';
import { choosenContext } from '../context/context';
import imagePaths from '../utils/imagePaths';
import { computerContext } from '../context/context';
import { plindexContext } from '../context/context';
import { compindexContext } from '../context/context';
import { scoreContext } from '../context/context';
import { resultContext } from '../context/context';
import Result from '../components/result'
const Play = () => {

    const { compindex } = useContext(compindexContext);
    const { plindex } = useContext(plindexContext);
    const { choosen } = useContext(choosenContext);
    const { computer, setcomputer } = useContext(computerContext);
    const { result, setresult } = useContext(resultContext)
    const [showresult, setshowresult] = useState(false);
    const { score, setscore } = useContext(scoreContext)
    const [visible_win,setvisible_win] = useState('hidden')
    const [visible_loose,setvisible_loose] = useState('hidden')
    const[position_win,setposition_win] = useState('');
    const[position_loose,setposition_loose] = useState('');

    const winner = async () => {
        if (compindex === 0 && (plindex === 2 || plindex === 3)) {
           
            return 0;
        } else if (compindex === 1 && (plindex === 4 || plindex === 0)) {
            console.log("computer----1", compindex);
            console.log("player-----4,0", plindex);
            return 0;
        } else if (compindex === 2 && (plindex === 4 || plindex === 1)) {
           
            return 0;
        } else if (compindex === 3 && (plindex === 2 || plindex === 1)) {
            
            
            return 0;
        } else if (compindex === 4 && (plindex === 3 || plindex === 0)) {
            return 0;
        } else if (plindex === 0 && (compindex === 2 || compindex === 3)) {

            return 1;
        } else if (plindex === 1 && (compindex === 4 || compindex === 0)) {
            return 1;
        } else if (plindex === 2 && (compindex === 4 || compindex === 1)) {
            return 1;
        } else if (plindex === 3 && (compindex === 2 || compindex === 1)) {
            return 1;
        } else if (plindex === 4 && (compindex === 3 || compindex === 1)) {
            return 1;
        } else {
            return -1;
        }
    }


    useEffect(() => {
        const decider = async () => {
        
            const Result = await winner();
         
            if (Result === 0) {
                setresult((prev) => "You LOOse");
           setTimeout(() => {
            setscore((prev) => {
                if (prev !== null && prev !== undefined) {
                    if (prev <= 0) {
                        return 0;
                    } else {
                        return prev - 1;
                    }
                }
            })
            setvisible_loose('block')
            setvisible_win('hidden');
            setposition_loose('relative bottom-[175px]')
            setposition_win('');
           }, 2000);

            } else if (Result === -1) {
              
                setresult((prev) => "Draw");
                setscore((prev) => prev);
            } else if (Result === 1) {

                setresult((prev) => "YOu WON");
                setTimeout(() => {
                    setscore((prev) => {
                        if (prev !== null && prev !== undefined) {
                         
                            return prev + 1;
                        }
    
                    })
    setvisible_win('block')
    setvisible_loose('hidden')
    setposition_win('relative bottom-[175px]')
    setposition_loose('')
                }, 2000);
            }
        }
        decider();
    }, [compindex]);

    


    return (<>
        <section >
            <div className='flex  justify-between text-white  h-[200px]  mx-auto'>
        <div className=''>
        <div className={`w-[240px] h-[240px]  flex justify-center items-center rounded-full bg-[#273958] ${visible_win}`}>

<div className=' w-[170px] h-[170px] flex justify-center items-center rounded-full bg-[#2f4268] shadow-radial-custom'>
<div className='  w-[130px] h-[130px] flex justify-center rounded-full  bg-[#3f4c66] shadow-radial-custom'>



  </div>

</div>
</div>
                    
                    <div className={`${!position_win ? 'mt-12' : ''} ${position_win}`}>
                 <div className={` flex justify-center`}>
                                <Card img={choosen} index={plindex} />
                            </div>
                        <div className='mt-4 text-center font-barlow-semi-condensed font-[700] text-[18px]'>You Picked</div>
                 </div>
              
                </div>
             
                <div>
                    
                    <div className=''>
    <div className={`w-[240px] h-[240px]  flex justify-center items-center rounded-full bg-[#223555] ${visible_loose}`}>

                  <div className=' w-[170px] h-[170px] flex justify-center items-center rounded-full bg-[#253453] shadow-radial-custom'>
                  <div className='  w-[130px] h-[130px] flex justify-center rounded-full  bg-[#2A3956] shadow-radial-custom'>
                 
                 
                
                    </div>
             
                  </div>
    </div>

               
                 <div className={`${!position_loose ? 'mt-12' : ''} ${position_loose}`}>
                 <div className={`${computer ? 'block' : 'hidden'} flex justify-center`}>
                                <Card img={computer} index={compindex} />
                            </div>
                        <div className='mt-4 text-center font-barlow-semi-condensed font-[700] text-[18px]'>The House Picked</div>
                 </div>
                    </div>
                </div>


            </div>
       {/* <div className='absolute  w-[90%]  bottom-40 flex-shrink-0 '>
       <Result />
       </div> */}
       <Result />
        </section>
       

        {/* <div className=''><Card img={choosen} index={plindex} /></div> */}
    </>)
}

export default Play;
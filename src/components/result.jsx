import { resultContext } from "../context/context"
import { useContext ,useEffect,useState} from "react"
import { countContext } from "../context/context"
import { compindexContext } from "../context/context"
import { plindexContext } from "../context/context"
const Result = ()=>{
    const {compindex} = useContext(compindexContext);
    const {plindex} = useContext(plindexContext);
const {result,setresult} = useContext(resultContext)
const {count,setcount} = useContext(countContext)

const [showresult,setshowresult] = useState(false)
const play_again = ()=>{

    setcount(0)
    console.log(count)


}

useEffect(()=>{
   const id= setTimeout(() => {
  
    setshowresult(true);
    
    }, 1500);

    return ()=>{
        return clearInterval(id);
    }
},[])



// const winner = () => {
//     if (compindex === 0 && (plindex === 2 || plindex === 3)) {
//         console.log("computer----0",compindex);
//         console.log("player-----2,3",plindex);
//         return 0;
//     } else if (compindex === 1 && (plindex === 4 || plindex === 0)) {
//         console.log("computer----1",compindex);
//         console.log("player-----4,0",plindex);
//         return 0;
//     } else if (compindex === 2 && (plindex === 4 || plindex === 1)) {
//         console.log("computer----2",compindex);
//         console.log("player-----4,1",plindex);
//         return 0;
//     } else if (compindex === 3 && (plindex === 2 || plindex === 1)) {
//         console.log("computer----3",compindex);
//         console.log("player-----2,1",plindex);
//         return 0;
//     } else if (compindex === 4 && (plindex === 3 || plindex === 0)) {
//         console.log("computer----4",compindex);
//         console.log("player-----3,0",plindex);
//         return 0;
//     } else if (plindex === 0 && (compindex === 2 || compindex === 3)) {
       
//         return 1;
//     } else if (plindex === 1 && (compindex === 4 || compindex === 0)) {
//         return 1;
//     } else if (plindex === 2 && (compindex === 4 || compindex === 1)) {
//         return 1;
//     } else if (plindex === 3 && (compindex === 2 || compindex === 1)) {
//         return 1;
//     } else if (plindex === 4 && (compindex === 3 || compindex === 1)) {
//         return 1;
//     } else {
//         return -1;
//     }
// }


// useEffect(() => {
//     const Result = winner();
//     if (Result === 0) {
//         setresult((prev) => "You LOOse");
//           setscore((prev)=>{
//             if(prev!==null && prev!==undefined){
//                 if(prev<=0){
//                     return 0;
//                 }else{
//                     return prev-1;
//                 }
//             }
//           })
//     } else if (Result === -1) {
//         console.log("player index--",plindex)
//         console.log(("computer index"),compindex)
//         setresult((prev) => "Draw");
//         setscore((prev)=>prev);
//     } else if (Result === 1) {
        
//         setresult((prev) => "YOu WON");
//        setscore((prev)=>{
//      if(prev!==null && prev!==undefined){
// console.log("returned 1 ")
//         return prev+1;
//      }

//        })
    
//     }
// }, [compindex]);

    return (<>
    <section className='mt-14 '>
    <div className='font-barlow-semi-condensed font-[700] text-[32px] text-white  text-center'>{showresult? <p>{result}

</p>: ''}</div>
    <div className='bg-white font-[400] text-[24px] font-barlow-semi-condensed text-center w-1/2 mx-auto rounded-lg mt-4 cursor-pointer' onClick={play_again}><p>Play Again</p></div>
</section>
    </>)
}

export default Result;
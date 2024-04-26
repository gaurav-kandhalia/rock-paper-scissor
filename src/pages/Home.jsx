import Scores from "../components/scores";
import Pick from '../components/pick';
import Play from '../components/play'
import Rules from '../components/Rules'
import { pathContext } from "../context/context";
import { choosenContext } from "../context/context";
import imagePaths from "../utils/imagePaths";
import { useEffect, useState } from "react";
import { computerContext } from "../context/context";
import { scoreContext } from "../context/context";
import { plindexContext } from "../context/context";
import { compindexContext } from "../context/context";
import { resultContext } from "../context/context";
import { countContext } from "../context/context";
const Home = () => {
    const [choosen, setchoosen] = useState('')
    const [computer, setcomputer] = useState('');
    const [score, setscore] = useState(()=>{
        const storedScore = localStorage.getItem('score');
        console.log("scoress",storedScore)
        return storedScore ? JSON.parse(storedScore) : 0 ;
    })
    const [plindex, setplindex] = useState(null)
    const [compindex, setcompindex] = useState(null);
    const [result, setresult] = useState("");
    const [count, setcount] = useState(0);

    const rules = () => {
        setcount(3)
    }
    const paths = imagePaths.map((path, index) => {
        return { path, index }
    })

    useEffect(()=>{
localStorage.setItem('score',JSON.stringify(score));
    },[score])
    return (<>
        <countContext.Provider value={{ count, setcount }}>
            <resultContext.Provider value={{ result, setresult }}>
                <compindexContext.Provider value={{ compindex, setcompindex }}>
                    <plindexContext.Provider value={{ plindex, setplindex }}>
                        <scoreContext.Provider value={{ score, setscore }} >
                            <computerContext.Provider value={{ computer, setcomputer }}>
                                <choosenContext.Provider value={{ choosen, setchoosen }}>
                                    <pathContext.Provider value={paths}>
                              
                                      
                                    {count !== 3 && (
    <section className="bg-custom-gradient min-h-screen top-0 py-2">
        <div className="mt-4">
            <Scores />
        </div>
        <div className="mt-12 ">
            <div className="mx-auto w-[90%]  sm:w-[65%] md:w-[80%]">
                {count === 1 ? <Play /> : <Pick />}
                <div className="w-[90%] mx-auto"></div>
            </div>
        </div>
        <div className="mt-6 flex justify-center">
            <div className="border-2 w-[100px] text-white font-barlow-semi-condensed flex justify-center text-[18px] rounded-lg p-1 cursor-pointer" onClick={rules}><p>Rules</p></div>
        </div>
        <div className="mt-56 flex justify-center hidden">
            <div className="border-2 w-[100px] text-white font-barlow-semi-condensed flex justify-center text-[18px] rounded-lg p-1" onClick={rules}><p>Rules</p></div>
        </div>
    </section>
)}

{count === 3 && <Rules />}
                                    </pathContext.Provider>
                                </choosenContext.Provider>
                            </computerContext.Provider>
                        </scoreContext.Provider>
                    </plindexContext.Provider>
                </compindexContext.Provider>
            </resultContext.Provider>
        </countContext.Provider>
    </>)
}

export default Home;
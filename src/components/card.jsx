import { useEffect, useState } from "react";

const Card = ({ img, pick, index }) => {
    const [borders,setBorderColor] = useState(null)
    const colors = [
        '#40b9ce',
        '#834fe3',
        '#ec9e0e',
        '#dc2e4e',
        '#4865f4',
    ];



    useEffect(() => {
       
        if (index >= 0 && index < colors.length) {
          setBorderColor(colors[index]);
        }
      }, [index]);

    

    return (
      <>
        <div className={`min-h-[85px] w-[85px] sm:min-h-[100px] sm:w-[100px] rounded-full mt-4 bg-white flex justify-center items-center`} style={{ border: `15px solid ${borders}` }} onClick={pick}>
            <img src={img} alt="" className='h-8 w-8' />
        </div>
    
      </>

        
    );
}

export default Card;

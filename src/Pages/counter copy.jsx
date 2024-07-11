import { useEffect, useRef, useState } from "react";

const Counter3 = () => {
   const counterRef = useRef(0);
   const [counter,setCounter]=useState(0);
   let x=0;
//    useEffect(()=>{
//     console.log("shjhjhjfhja")
//    })
	return (
		<div>
            <button onClick={()=>{
                counterRef.current+=1;
                x++;
                setCounter(counter+1);
                console.log(counterRef.current,counter,x)
                
            }}>click mwwwwwwwwwwwwwwwwwww</button>
            <h1>{counterRef.current}</h1>
            <h1>{x}</h1>
            <h1>{counter}</h1>

		</div>
	);
};

export default Counter3;

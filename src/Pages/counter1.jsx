import { useEffect, useState } from "react";

const Counter1 = () => {
    const [state, setState] = useState(0);
	const [state1, setState1] = useState(0);

	useEffect(() => {
			
		console.log("state changed");
	return ()=>
        {console.log("cleanedd")}
    }, [state]);
		
		
	
	return (
		<div>
			<h1>{state}</h1>
            <h1>{state1}</h1>

			<button onClick={() => {
                setState(state + 1)
                
                }}>state+</button>
			<button onClick={() => {
                setState(state - 1)
                
                }}>state-</button>
				<button onClick={() => {
               
                setState1(state1+1)
                }}>state1+</button>
			<button onClick={() => {
                
                setState1(state1-1)
                }}>state1-</button>
		</div>
	);
};

export default Counter1;

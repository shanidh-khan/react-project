import { useEffect, useState } from "react";

const Counter = () => {
    const [fields,setFields]=useState({
		employeeName : "",
		employeeId : ""
	})
   

	useEffect(() => {
		console.log(fields);
	
    }, [fields]);
	return (
		<div>
			

			<button onClick={() => {
                setFields(prevState => ({
                    ...prevState,
                    employeeName: "jhghjgjhgdhfs"
                }))
                
                }}  >state+</button>
			<button onClick={() => {
                setFields(prevState => ({
                    ...prevState,
                    employeeId: "1321321231321"
                }))
                
                }}>state-</button>
				
		</div>
	);
};

export default Counter;

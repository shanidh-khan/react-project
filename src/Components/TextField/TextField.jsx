import { forwardRef } from "react";

const TextField = forwardRef((props,ref) => {
	// useEffect(()=>{console.log("changed  text",text)},[text])
    let color="green"
    if(props.error) color="red"
    
	return (
		<div className={props.divClassName}>
			<label>{props.label}</label>
			<input
				type={props.type}
				value={props.value}
				onChange={(e)=>{props.onChange(e,props.field)}}
				name={props.label}
				id={props.label}
				placeholder={props.label}
				className={props.inputClassName}
                style={{borderColor:color}}
			/>
		</div>
	);
});
export default TextField;

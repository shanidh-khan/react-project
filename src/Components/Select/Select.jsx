
const Select = (props) => {
	return (
		<div className={props.divClassName}>
			<label>{props.label}</label>
			<select
				name={props.name}
				id={props.id}
				className={props.inputClassName}
				placeholder={props.placeholder}
                onChange={(e)=>{props.onChange(e,props.field)}}

			><option value="" className="placeholderSelect"></option>
				{props.options.map((option)=>{
        return (<option value={option} className="placeholderSelect">{option}</option>)
    })}
				
				
			</select>
		</div>
	);
};


export default Select;
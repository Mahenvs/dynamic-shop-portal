import { forwardRef } from 'react';
import './CustomFormControl.css';

const CustomFormControl = forwardRef((props,ref) =>{
    let classes = `w-[35rem]  p-1 border-b-2 border-sky-700 rounded text-xl  focus:outline-none focus:border-sky-900 ${props.extraClass}`;
    
    if(props.class == "error"){
        classes =`w-[35rem]  p-1 border-b-2 border-red-700 text-stone-950 rounded text-xl  focus:outline-none focus:border-sky-900`;
    }

    return <span className='w- flex mb-4 '>
            <input className={classes} ref={ref}
            type={props.type} placeholder={props.title} id={props.id} 
            onChange={props.inputChange}
            onBlur={props.inputBlur}/>
    </span>
})
export default CustomFormControl;


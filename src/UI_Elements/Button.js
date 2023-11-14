import './Button.css';

const Button = (props) => {
    let className = `bg-[#240000]  px-8 font-mono text-lg rounded-md text-teal-50`;
    if(props.class){
        className = `bg-[#240000] px-8 font-mono text-lg rounded-md text-teal-50 ${props.class}` ;
    }
    return <>
        <button type='button' className={className}  
        onClick={props.onClickButton}>
            {props.title}
        </button>
    </>
}
export default Button;
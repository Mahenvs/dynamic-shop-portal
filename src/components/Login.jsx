import { Link, NavLink, useNavigate } from "react-router-dom"
import './Login.css';
import CustomFormControl from "../UI_Elements/CustomFormControl"
import CustomFormLabel from "../UI_Elements/CustomFormLabel"
import { useState } from "react"
import shop from '../assets/shop.jpg';

const InitialState = {
    email: "",
    password: "",
    cnfpassword: "",
    firstName: "",
    lastName: "",
    address:"",
    phoneNumber: ""

}
export const Login = () => {

    const [isLogin, setLogin] = useState(false);

    const [formData, setFormData] = useState(InitialState);

    const [isEdited, setEdited] = useState({
        email: false,
        password: false,
        cnfpassword: false
    });

    const toggleAuth = () => {
        setLogin(isLogin => !isLogin);
        setFormData(InitialState);
        setEdited({
            email: false,
            password: false,
            cnfpassword: false
        })
    }

    const handlerInput = (flag, value) => {
        console.log(flag);
        setFormData(prevValues => ({
            ...prevValues,
            [flag]: value
        }));

        setEdited(prevValues => ({
            ...prevValues,
            [flag]: true
        }));
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailError = isEdited.email && !emailPattern.test(formData.email);

    const pswdError = isEdited.password && formData.password.length < 5;
    const navigate = useNavigate();


    const saveHandler = (event,flag) => {
        event.preventDefault();

        async function Login() {
            console.log("inside 66 ");
            const data = await fetch(`http://192.168.1.81:8080/admins/login`, {
                method: "POST",
                body: new URLSearchParams({
                    "email": formData.email,
                    "password": formData.password
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }).then(response => {
                console.log(response.status);
                if (response.status == 200) {
                    navigate('/products');
                }
                return response.text();
            }).then(data => {
                console.log('API response:', data);

            });
        }

        async function Register() {
            console.log("inside",formData);
            const data = await fetch(`http://192.168.1.81:8080/admins`, {
                method: "POST",
                body: JSON.stringify({
                    "email": formData.email,
                    "password": formData.password,
                    "firstName": formData.firstName,
                    "lastName": formData.lastName,
                    "address": "3038 irving",
                    "phoneNumber": "9469856962"  
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then(response => {
                console.log(response);
                if (response.status == 200) {
                    navigate('/login');
                }
                return response.text();
            }).then(data => {
                console.log('API response:', data);

            });
        }
        if(!isLogin)
            Login();
        else    
            Register();
    }

    return <>
        <div className="bg-[#8F3F3F] h-screen">
            <dialog open className="rounded-xl mt-[8rem]">
                <form method="post" id="loginModal" className="border-zinc-100  p-3 px-5 "
                    onSubmit={saveHandler}>
                    <h2 className="flex font-semibold text-[#020024d1] h-10 items-center">
                        <img src={shop} width="50px" />
                        MultiMarketHub
                    </h2>
                    <h3 className="text-[#020024d1] mt-[2rem] mb-[2rem]">{!isLogin ? "Sign In" : "Sign Up"}</h3>
                    
                    {isLogin ?
                        <>
                        <span className="flex">
                            <span className="gap-4">
                            <CustomFormLabel label="First Name" />
                            <CustomFormControl 
                            // class={mailError ? "error" : ""}
                            type="text" name="text" extraClass="w-[15rem]"
                            inputBlur={(event) => handlerInput('firstName', event.target.value)} />
                            {/* {mailError && <p className="text-red-600 -mt-3">Enter a valid email address</p>} */}
                            </span>
                            <span className="ml-16">
                            <CustomFormLabel label="Last Name" />
                            
                            <CustomFormControl 
                            // class={mailError ? "error" : ""}
                            type="text" name="text" extraClass="w-[15rem]"
                            inputBlur={(event) => handlerInput('lastName', event.target.value)} />
                            {/* {mailError && <p className="text-red-600 -mt-3">Enter a valid email address</p>} */}
                            </span>
                        </span>
                        </>
                        : ""
                    }
                    <CustomFormLabel label="Email" />
                    <CustomFormControl class={mailError ? "error" : ""}
                    type="email" name="email" 
                    inputBlur={(event) => handlerInput('email', event.target.value)} />
                    {mailError && <p className="text-red-600 -mt-3">Enter a valid email address</p>}
                    <CustomFormLabel label="Password" />
                    <CustomFormControl class={pswdError ? "error" : ""}
                    type="password" name="pswd" 
                    inputChange={(event) => handlerInput('password', event.target.value)} />
                    {pswdError && <p className="text-red-600 -mt-3">Enter a valid password</p>}
                        
                        
                    {isLogin ?
                        <>
                            <CustomFormLabel label="Confirm Password" />
                            <CustomFormControl type="password"
                                inputChange={(event) => handlerInput('cnfpassword', event.target.value)}
                            />
                        </>
                        : ""
                    }

                    <div className="items-center flex justify-between">
                        <span>
                            Not a member?&nbsp;&nbsp;
                            <Link className="no-u nderline text-[#020024d1]" onClick={toggleAuth}> {!isLogin ? "Sign Up" : "Sign In"} </Link>
                        </span>
                        <button className="bg-[#240000] px-8 font-mono text-lg rounded-md text-teal-50">
                            {isLogin ? "Join" : "Login"}
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    </>

}
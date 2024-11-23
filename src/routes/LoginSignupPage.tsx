import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {useLocation, } from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import { useState, useEffect} from "react";
import DOMPurify from "dompurify";

type FormData = {
    email: string;
    password: string;
    category: string;
    showPassword: boolean;
    message: string;
}
export function LoginSignupPage() {
    const location = useLocation();
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<FormData>()
    const [data, setData] = useState<FormData |undefined >(undefined);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isChecked = watch("showPassword")
    const onSubmit:SubmitHandler<FormData> = (formData: FormData)=>{
      setData(formData)
        const sanitizedForm = Object.fromEntries(Object.entries(formData).map(([key,value])=>[key,  typeof value === "string" ? DOMPurify.sanitize(value) : value ]))
        reset()
       console.log( sanitizedForm)
    }

    useEffect(()=>{
        if(isChecked){
            setShowPassword(true);
        }
        else{
            setShowPassword(false);
        }
    }, [isChecked])

    return (
        <main className="relative min-h-screen flex items-center justify-center bg-neutral-900">
            <div className="container flex flex-col w-[360px] p-6 bg-neutral-800 rounded-2xl shadow-2xl ">
                <div className="">
                    <img className="mx-auto h-10 w-auto"
                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                         alt="Your Company"/>
                    {location.pathname=== "/login" && (<h2 className="my-6 text-center text-2xl/9 font-bold tracking-tight text-gray-200"> Log in to your
                        account</h2>)}
                    {location.pathname=== "/calendar" && (<h2 className="my-6 text-center text-2xl/9 font-bold tracking-tight text-gray-200"> Sign up to new
                        account</h2>)}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="font-extralight px-10">
                        <Input
                            type={"email"}
                            name={"email"}
                            placeholder={"Email"}
                            className={"bg-neutral-700 w-full  px-2 py-2  my-6 block  rounded-md border-1  "}
                            value={data?.email || ""}
                            register={register}
                            validation={
                                {required: "Email is required",
                                    validate: (value: string)=> value.includes("@") || "Email must includes '@'",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address format"

                                    }
                                }
                            }

                        />
                        {errors?.email?.message && <span className="text-red-500">{errors?.email?.message}</span>}

                    </div>

                    <div className="font-extralight px-10">
                        <Input
                            type={showPassword? "text" :"password"}
                            name={"password"}
                            placeholder={"Password"}
                            className={"bg-neutral-700 w-full  px-2 py-2  mt-4 mb-2 block  rounded-md border-1"}
                            value={data?.password || ""}
                            register={register}
                            validation={
                                { required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "password must be at least 8 characters"
                                    },
                                    maxLength: {
                                        value: 24,
                                        message: "password must not be more then 24 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,+=_)(])[A-Za-z\d!@#$%^&*.,()+=_]{8,}$/, // Password regex pattern
                                        message: "Password must contain at least one uppercase letter, one number, and one special character",
                                    },
                                }
                            }
                        />
                        {errors?.password?.message && <span className="text-red-500">{errors?.password?.message}</span>}
                    </div>
                    <label htmlFor={"showPassword"} className="text-neutral-500 font-extralight  ml-10" >Show Password
                        <Input
                            type={"checkbox"}
                            name={"showPassword"}
                            placeholder={""}
                            className={`w-3 h-3 ml-1 cursor-pointer appearance-none border-2 rounded-sm 
                                ${isChecked ? "bg-neutral-700 border-neutral-700" : "border-gray-400"} 
                                 focus:ring-1 focus:ring-green-700`}
                            register={register}
                            validation={{}}
                        />
                    </label>
                    <div className=" mt-6 flex justify-center ">
                        <Button
                            type={"submit"}
                            text={location.pathname === "/login" ? "Log in" : "Sign up"}
                            className={"bg-primary-700  py-2 px-24 mr-4 rounded-2xl text-white font-medium hover:bg-primary-500 hover:text-neutral-900 transition-all duration-300"}
                        />
                    </div>
                </form>
                { location.pathname==="/login" && (<p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?
                    <a href="#" className="font-semibold text-green-700 hover:text-indigo-500">Start a 14 day free
                        trial</a>
                </p>)}
            </div>
        </main>

    )
}
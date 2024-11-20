import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function LoginSignupPage() {
const navigate = useNavigate();
    const location = useLocation();
    const dashboardNavigate = ()=>{
        console.log("dashboardNavigate button works");
        navigate("/dashboard")

    }

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
    }
    return (
        <main className="relative min-h-screen flex items-center justify-center bg-neutral-900">

            <div className="container flex flex-col w-[360px] p-6 bg-neutral-800 rounded-2xl shadow-2xl ">
                <div className="">
                    <img className="mx-auto h-10 w-auto"
                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                         alt="Your Company"/>
                    {location.pathname=== "/login" && (<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-200"> Log in to your
                        account</h2>)}
                    {location.pathname=== "/signup" && (<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-200"> Sign up to new
                        account</h2>)}
                </div>



                <Input
                    name={"email"}
                    placeholder={"Email"}
                    onChange={onchangeHandler}
                    className={"w-full rounded-md my-4 py-2"}
                    classDivInput={"px-10"}



                />
                <Input
                    name={"password"}
                    placeholder={"Password"}
                    onChange={onchangeHandler}
                    className={"w-full rounded-md my-4 py-2"}
                    classDivInput={"px-10"}

                />
                <div className=" mt-6 flex justify-center ">
                    <Button
                        text={ location.pathname==="/login" ?  "Log in" : "Sign up"}
                        color={"green"}
                        paddingX={"px-24"}
                        marginR={"m-0"}
                        onClick={dashboardNavigate}/>
                </div>
                { location.pathname==="/login" && (<p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?
                    <a href="#" className="font-semibold text-green-700 hover:text-indigo-500">Start a 14 day free
                        trial</a>
                </p>)}
            </div>
        </main>

    )
}
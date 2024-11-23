import {Button} from "../components/Button";
import { useNavigate} from "react-router-dom";


type To = (string | Partial<Location>)
type NavigateFunction = (to: To) => void;

export function HomePage(){
    const imageSrc : string = "/assets/HomePage.png"
    const navigate:NavigateFunction   = useNavigate();
    const LoginNavigate = (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        navigate('/login')
    }
    const SignInNavigate = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <main className="grid grid-cols-2  w-full h-screen relative">
            <div className="absolute bottom-0 right-0 w-3/5 h-auto ">
                <img
                src={imageSrc}
                alt="home-Page"
                className=" w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="relative z-10 text-white p-4 mt-52 w-2/3 ">
                <div className="m-4 ">
                    <h1 className=" text-4xl font-bold mb-4 ">Analyse Your Trading Performance to Better Results</h1>
                    <p className="mb-4">Just do it</p>
                    <p className="text-xl text-gray-600 mb-4 ">Log In or Sign Up</p>
                </div>
                <Button
                text={'Log In'}
                type={"button"}
                className={"bg-primary-700  py-2 px-12 m-0 mr-4 rounded-2xl text-white font-medium hover:bg-primary-500 hover:text-neutral-900 transition-all duration-300"}
                onClick={LoginNavigate}
                />
                <Button
                text={'Sign Up'}
                type={"button"}
                className={"bg-secondary-700  py-2 px-12 m-0 mr-4 rounded-2xl text-white font-medium hover:bg-secondary-500 hover:text-neutral-900 transition-all duration-300"}
                onClick={SignInNavigate}
                />
            </div>
        </main>
    )
}
import {Button} from "../components/Button";
import { useNavigate} from "react-router-dom";


type To = (string | Partial<Location>)
type NavigateFunction = (to: To) => void;
export function HomePage(){
    const navigate:NavigateFunction   = useNavigate();





    const LoginNavigate = (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        navigate('/login')
    }
    const SignInNavigate = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        navigate('/signup')
        // This calls the function but doesn't log anything by itself


      
    }

    const imageSrc : string = "/assets/HomePage.png"
    return <main className="grid grid-cols-2  w-full h-screen relative">


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
                color={"green"}
                text={'Log In'}
                paddingX={'px-12'}
                marginR={"mr-4"}
                onClick={LoginNavigate}/>
            <Button
                color={"red"}
                text={'Sign Up'}
                paddingX={'px-12'}
                marginR={"mr-4"}
                onClick={SignInNavigate}/>


        </div>
    </main>;
}
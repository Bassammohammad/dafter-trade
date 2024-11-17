import {Button} from "../components/Button";


export function HomePage(){
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
            <Button />



        </div>
    </main>;
}
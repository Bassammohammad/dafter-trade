import {SideBar} from "../components/SideBar";
import {NavBar} from "../components/NavBar";


export function Dashboard() {
    return (
        <main className="  relative min-h-screen overflow-hidden">
            <div className="container flex bg-neutral-950 h-[700px] w-4/5 mx-auto my-16  rounded-3xl ">
                <SideBar />
                <NavBar />


            </div>
        </main>


    )
}
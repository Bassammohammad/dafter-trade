import {Input} from "../components/Input";
import {ChangeEvent} from "react";



export function NavBar() {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("handleChange", event.target.value);
    }
    return (
        <div className=" nav-bar-div flex bg-neutral-800 h-12 w-1/2 rounded-3xl mt-12 ml-6 items-center">
            <Input
                name={"Search"}
                placeholder={ "Search..." }
                onChange={handleChange}
                className={"w-full rounded-3xl  py-1"}
                classDivInput={"px-2"}

            />

        </div>
    )
}
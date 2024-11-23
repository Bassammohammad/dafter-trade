import {UseThemeButton} from "../Context/ChangeTheme";
import { AiFillDashboard } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";




export function SideBar(){
    const {theme} = UseThemeButton();
    return (
        <div className={` side-bar-div bg-${theme}-700 w-16 h-5/6 ml-6 my-12 rounded-3xl flex flex-col`} >
            <AiFillDashboard className="size-8 mx-4 my-4 text-white" />
            <FaChartBar className="size-8 mx-4 my-4 text-white" />
            <HiOutlineMoon className="size-8 mx-4 my-4 text-white" />
            <HiOutlineSun className="size-8 mx-4 my-4 text-white" />
            <div className="flex-1">

            </div>

            <VscAccount className=" size-8 mx-4 my-4 text-white" />
            <MdOutlineSettings className="size-8 mx-4 my-4 text-white" />



        </div>
    )
}
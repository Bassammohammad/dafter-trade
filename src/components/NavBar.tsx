import {Input} from "../components/Input";
import {SubmitHandler, useForm} from "react-hook-form";

type Value= {
    Search: string;
}

export function NavBar() {
    const {register,handleSubmit, reset } = useForm<Value>();
    const onSubmit: SubmitHandler<Value> = (value:Value) => {
        console.log(value)
        reset()
    }

    return (
        <div className=" navBar-div flex bg-neutral-800 h-12 w-1/2 rounded-3xl mt-12 ml-6 items-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input
                    name={"Search"}
                    placeholder={ "Search..." }
                    className={" bg-neutral-700 w-4/5  rounded-3xl  py-1 mx-2 px-2"}
                    register={register}
                    validation={{}}
                />
            </form>
        </div>
    )
}
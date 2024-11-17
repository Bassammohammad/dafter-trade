export function Button(){
    return (
        <div>
            <div className="mx-2 inline">
                <button className=" bg-green-500 py-2 px-12 rounded-2xl hover:bg-green-200 hover:text-neutral-900">
                    Log In
                </button>
            </div>
            <div className="mx-2 inline">
                <button className="bg-green-500 py-2 px-12 rounded-2xl hover:bg-green-200 hover:text-neutral-900">
                    Sign Up

                </button>
            </div>

        </div>
    )
}
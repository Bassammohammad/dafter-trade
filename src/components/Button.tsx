
interface Props {
    color: string;
    text: string | boolean;
    paddingX: string;
    marginR: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

}


export function Button({color, text, paddingX, marginR, onClick} : Props) {


    return (

            <button  onClick ={onClick} className= {`bg-${color}-700 ${paddingX} ${marginR} py-2 m-0 rounded-2xl text-white font-medium hover:bg-${color}-500 hover:text-neutral-900 transition-all duration-300`}>
                {text}
            </button>


    )

}

interface Props {
    text: string | boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
    onClick?: (e: React. MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ text,type, onClick, className } : Props) {
    return (
        <button onClick={onClick} type={type}  className= {className}>
            {text}
        </button>
    )
}
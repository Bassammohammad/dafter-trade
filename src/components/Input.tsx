interface Props {
    placeholder: string | undefined
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    className: string;
    classDivInput: string;


}

export function Input({placeholder, onChange, name, className, classDivInput}: Props) {

    return (
        <div className={`font-extralight ${classDivInput} `}  >

            <input className={`bg-neutral-700 border-1 px-2 block ${className}`} placeholder={placeholder} onChange={onChange} name={name}  />
        </div>
    )
}
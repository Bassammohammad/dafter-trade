import { FieldError, UseFormRegister, FieldValues, RegisterOptions} from "react-hook-form";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type?:string;
    placeholder: string | undefined
    name: string;
    className: string;

    register: UseFormRegister<any>;

    validation: RegisterOptions
}

export function Input({placeholder, name, className,  type, register, validation}: Props) {

    return (
            <input
                {...register(name, validation)}
                type={type}
                className={className}
                placeholder={placeholder}
                name={name}

            />
      )
}
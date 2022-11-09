import { InputHTMLAttributes } from "react";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: Path<FieldValues>;
    register: UseFormRegister<FieldValues>;
}

export default function (props: InputProps) {
    return (
        <>
        <div>
            
        </div>
        </>
    )
}
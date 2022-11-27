import {  InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import { InputContainer, StyledInput } from "./style";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
    icon: JSX.Element;
}

export default function (props: InputProps) {
    return (
        <>
        <InputContainer>
            {props.icon}
            <StyledInput {...props} />
            <div className="bar" ></div>
        </InputContainer>
        </>
    )
}
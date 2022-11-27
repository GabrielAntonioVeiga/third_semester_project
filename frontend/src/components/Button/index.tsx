import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface buttonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonName: string
    
}

export default function (props: buttonProps) {
    return (
        <>
        <div>
            <StyledButton  {...props}> {props.buttonName} </StyledButton>
        </div>
        </>
    )
}
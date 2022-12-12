import { ButtonHTMLAttributes } from "react"
import { ButtonContainer, StyledButton } from "./style"

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string
}

export default function (props: buttonProps) {
  return (
    <>
    <ButtonContainer>
      <StyledButton {...props}> {props.buttonName} </StyledButton>
    </ButtonContainer>
    </>
  )
}

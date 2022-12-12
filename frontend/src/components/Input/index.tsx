import { InputHTMLAttributes } from "react"
import { InputContainer, StyledBar, StyledInput } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element
}

export default function (props: InputProps) {
  return (
    <>
      <InputContainer>
        <i>{props.icon}</i>
        <StyledInput {...props} />
        <StyledBar />
      </InputContainer>
    </>
  )
}

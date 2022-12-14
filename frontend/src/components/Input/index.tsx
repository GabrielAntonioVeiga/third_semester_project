import { InputHTMLAttributes } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { InputContainer, StyledBar, StyledInput } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element
  name: Path<FieldValues>
  register: UseFormRegister<FieldValues>
}

export default function (props: InputProps) {
  return (
    <>
      <InputContainer>
        <i>{props.icon}</i>
        <StyledInput {...props} {...props.register(props.name)} />
        <StyledBar />
      </InputContainer>
    </>
  )
}

import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, StyledHeaderContainer } from "./style"
import { MdOutlineMail } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { UserFormData } from "../../types/user"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function () {
  const { createUser } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }

  const onSubmit = (data: UserFormData) => {
    createUser(data)
  }

  return (
    <>
      <Container>
        <StyledHeaderContainer>
          <strong>Registro</strong>
        </StyledHeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            icon={<AiOutlineUser color="#aa4465" />}
            placeholder="Name"
            name="name"
            register={register}
          />
          <Input
            icon={<MdOutlineMail color="#aa4465" />}
            placeholder="Email"
            name="email"
            register={register}
          />
          <Input
            icon={<RiLockPasswordLine color="#aa4465" />}
            placeholder="Password"
            name="password"
            register={register}
          />
          <Input
            icon={<RiLockPasswordLine color="#aa4465" />}
            placeholder="Confirm password"
            name="confirm-password"
            register={register}
          />
          <Button buttonName="Criar usuário" />
          <span>
            Já tem uma conta ? <a onClick={handleClick}>Login</a>
          </span>
        </form>
      </Container>
    </>
  )
}

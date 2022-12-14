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
  const { loginUser } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/register")
  }

  const onSubmit = (data: UserFormData) => {
    loginUser(data)
  }
  return (
    <>
      <Container>
        <StyledHeaderContainer>
          <strong>Login</strong>
        </StyledHeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button buttonName="Logar usuário" />
          <span>
            Não tem uma conta ? <a onClick={handleClick}>Registro</a>
          </span>
        </form>
      </Container>
    </>
  )
}

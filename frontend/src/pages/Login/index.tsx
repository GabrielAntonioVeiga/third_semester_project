import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, StyledHeaderContainer } from "./style"
import { MdOutlineMail } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

export default function () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/register")
  }
  return (
    <>
      <Container>
        <StyledHeaderContainer>
          <strong>Login</strong>
        </StyledHeaderContainer>
        <form>
          <Input icon={<MdOutlineMail color="#aa4465" />} placeholder="Email" />
          <Input
            icon={<RiLockPasswordLine color="#aa4465" />}
            placeholder="Password"
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

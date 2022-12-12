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
    navigate("/login")
  }

  return (
    <>
      <Container>
        <StyledHeaderContainer>
          <strong>Registro</strong>
        </StyledHeaderContainer>
        <form>
          <Input icon={<AiOutlineUser color="#aa4465" />} placeholder="Name" />
          <Input icon={<MdOutlineMail color="#aa4465" />} placeholder="Email" />
          <Input
            icon={<RiLockPasswordLine color="#aa4465" />}
            placeholder="Password"
          />
          <Input
            icon={<RiLockPasswordLine color="#aa4465" />}
            placeholder="Confirm password"
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

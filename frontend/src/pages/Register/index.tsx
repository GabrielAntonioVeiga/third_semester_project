import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./style";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"


export default function  () {


    return (
        <>
            <Container>
                <main>
                <form>
                    <Input icon={<AiOutlineUser color="#aa4465" />} placeholder="name" />
                    <Input icon={<MdOutlineMail color="#aa4465"/>} placeholder="email" />
                    <Input icon={<RiLockPasswordLine color="#aa4465"/>} placeholder="password" />
                    <Input icon={<RiLockPasswordLine color="#aa4465"/>} placeholder="confirm password" />
                    <Button buttonName="Criar usuário" />
                </form>
                </main>
                <footer>
                    <p>Já tem uma conta ?</p><a href="">Login</a>
                </footer>
            </Container>
        </>
    )
}
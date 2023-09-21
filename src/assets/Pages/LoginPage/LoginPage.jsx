import { FormLoginComponent } from "../../Components/Form/Login/LoginComponent";

import * as Styled from './LoginPage.style';

import imagemLogin from '../../../../public/images/medicLogo.svg';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
 
  const navigate = useNavigate();
  const redirectCadastro = () => {
      navigate("/cadastro");
  }

  return (
    <>

      <Styled.ContainerLogin>
          <Styled.ImageLogin src={imagemLogin} />
          <Styled.BarraCentral/>

          <Styled.DivCriarConta>
            <Styled.LabelCriarConta>Não possui uma conta?</Styled.LabelCriarConta>
            <Styled.ButtonHeaderLogin onClick={redirectCadastro}>Criar Conta</Styled.ButtonHeaderLogin>
          </Styled.DivCriarConta>

          <Styled.Login>
            <FormLoginComponent/>
          </Styled.Login>

      </Styled.ContainerLogin>
    </>
  )
}




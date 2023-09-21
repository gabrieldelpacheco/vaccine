import { FormCadastroComponent } from "../../Components/Form/Cadastro/CadastroComponent.jsx";


import * as Styled from './CadastroPage.style';

import imagemCadastro from '../../../../public/images/medicCadastro.svg';
import { useNavigate } from "react-router-dom";



export const CadastroPage = () => {

    const navigate = useNavigate();
    const redirectLogin = () => {
        navigate("/login");
    }

  return (
    <>

      <Styled.ContainerCadastro>
          <Styled.ImageCadastro src={imagemCadastro} />
          <Styled.BarraCentral/>

          <Styled.DivCriarConta>
            <Styled.LabelCriarConta>Já possui uma conta?</Styled.LabelCriarConta>
            <Styled.ButtonHeaderCadastro onClick={redirectLogin}>Login</Styled.ButtonHeaderCadastro>
          </Styled.DivCriarConta>

          <Styled.Cadastro>
            <FormCadastroComponent/>
          </Styled.Cadastro>

      </Styled.ContainerCadastro>
    </>
  )
}




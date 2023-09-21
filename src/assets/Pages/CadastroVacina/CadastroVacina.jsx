import * as Styled from './CadastroVacina.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';
import { InputSearchVacina } from '../../Components/InputSearchVacina/InputSearchVacina';



export const CadastroVacinaPage = () => {


  const { setData } = useContext(HeaderContext);
  useEffect(() => {
    setData({
      titulo: 'CADASTRO DE VACINA',
    });

  }, []);


  const render = () => {
    return (
      <>
        <Styled.AreaCadastro>
          <Styled.Title>
            <InputSearchVacina />
          </Styled.Title>
        </Styled.AreaCadastro>
      </>
    )
  }

  return render()

}

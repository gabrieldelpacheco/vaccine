import * as Styled from './CardHistorico.style';
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';


const CardHistorico = ({ paciente }) => {

  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>


          <Styled.DadosPaciente>

            <Styled.Dados>{paciente.id}</Styled.Dados>
            <Styled.Dados>{paciente.nome}</Styled.Dados>
        
            <Styled.Arrow>
            <Link to={`/historicos/${paciente.id}`}><ImArrowRight2/> </Link>
            </Styled.Arrow>

           </Styled.DadosPaciente>
        
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>
    </>
  );
};

export default CardHistorico;




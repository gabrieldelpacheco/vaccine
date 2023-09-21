import * as Styled from './CardVacina.style';


function CardVacina ({vacina})  {

  return (

    <>

  <Styled.RenderResultados>

    <p>Nome da Vacina: {vacina.nomeVacina} </p>
    <p>Nome do Laboratório: {vacina.nomeLaboratorio} </p>
    <p>Data da Aplicação: {vacina.dataAplicacao} </p>
    <p>Hora da Aplicação: {vacina.horaAplicacao} </p>
    <p>Dosagem : {vacina.quantidadeAplicacao} </p>
    <p>Observação: {vacina.observacao} </p>

  </Styled.RenderResultados>
 
    
    </>
  );
}

export default CardVacina;
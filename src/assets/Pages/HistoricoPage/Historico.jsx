import * as Styled from './Historico.style'
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/Header.context';
import { useLocation } from 'react-router-dom';
import { PacienteService } from '../../../Service/User/Paciente.service';
import { VacinaService } from '../../../Service/User/Vacina.service';
import CardVacina from '../../Components/CardVacina/CardVacina';

export const HistoricoPage = () => {
  const [paciente, setPaciente] = useState()
  const [vacina, setVacina] = useState()
  const { setData } = useContext(HeaderContext)
  const {pathname} = useLocation()

  useEffect(() => {
    setData({       
      titulo: 'HISTPORICO DETALHADO DE VACINAÇÃO'}) 
      const location = pathname.split('/')
      const pacienteId = location[location.length - 1]
      const vacinaId = location[location.vacina]
      const asyncFn = async () => {
        await PacienteService.Show(pacienteId).then(async (response)  => {
          setPaciente(response)
          await VacinaService.Get().then(res => setVacina(res.filter(cc => cc.pacienteId === response.id)))
        })
   
      }
      asyncFn()
    }, []);

    const render = () => {
        return (
          <>          
            <Styled.Historico>
            <Styled.HeaderHistorico>
                <Styled.Title>{paciente?.nome}</Styled.Title>
                <Styled.Label>Nacimento: {paciente?.nasc}</Styled.Label>
                <Styled.Label>Contato: {paciente?.tel}</Styled.Label>
            </Styled.HeaderHistorico>

            <Styled.CorpoHistorico>

            <Styled.SubTitle><span>1</span>Vacinas</Styled.SubTitle>

              <Styled.RenderResultados>
                  {vacina && vacina.map(vacina => <CardVacina vacina={vacina} key={vacina.id} />)}
              </Styled.RenderResultados>

            </Styled.CorpoHistorico>
          </Styled.Historico>

          </>
      )
    }
    return render()
  }
  


  



import * as Styled from './ListaVacina.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';



import { InputSearchHistorico } from '../../Components/InputSearchHistorico/InputSearchHistorico';


export const ListaVacinaPage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'LISTAGEM DE VACINAS',}) 
      
    }, []);
    
  
    const render = () => {
        return (
          <>
        <Styled.AreaCadastro>
            <Styled.Title>
                <InputSearchHistorico/>
            </Styled.Title>
        </Styled.AreaCadastro>
          </>
      )
    }

    return render()
    
  }
  


  



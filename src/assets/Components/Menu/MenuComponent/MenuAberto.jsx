import * as Styled from './MenuComponent.style';
import MenuItem from '../../MenuItem/MenuItem';

import React from 'react'
import { 
  FaHome, 
  FaSignInAlt,
  FaPlus,
  FaTasks,
  FaLaptopMedical

} from 'react-icons/fa';

import { ImDroplet } from 'react-icons/im';

const MenuAberto = () => {

    return (
        <>

        
        <Styled.MenuContainer >
              <Styled.MenuArea>
         
            <Styled.MenuLogoFechado src={'../../../../public/images/medic.svg'} />
            <Styled.MenuSetor>Geral</Styled.MenuSetor>
            <MenuItem Icon={FaHome} Text="INICIO" To='/' />
            <MenuItem Icon={FaSignInAlt} Text="SAIR" To='/login' />

            <Styled.MenuSetor>Pacientes</Styled.MenuSetor>
            <MenuItem Icon={FaPlus} Text="CADASTRAR PACIENTE" To='/paciente' />
            <MenuItem Icon={FaTasks} Text="HISTÓRICO DE APLICAÇÃO" To='/listaVacina'  />

            <Styled.MenuSetor>Vacina</Styled.MenuSetor>
            <MenuItem Icon={ImDroplet} Text="CADASTRAR VACINA" To='/cadastroVacina' />
        </Styled.MenuArea>


                                      
              
            
         </Styled.MenuContainer>
        </>
    )
  }
  
  export default MenuAberto
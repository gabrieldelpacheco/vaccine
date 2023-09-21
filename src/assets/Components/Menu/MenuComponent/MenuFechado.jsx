import * as Styled from './MenuComponent.style';
import React from 'react'
import MenuItemFechado from '../MenuItemFechado/MenuItemFechado';
import { 

    FaHome, 
    FaSignInAlt,
    FaPlus,
    FaTasks,
    FaLaptopMedical
    

  } from 'react-icons/fa';

  import { ImDroplet } from 'react-icons/im';



const MenuFechado = () => {
   

    return (
        <>
            <Styled.MenuFechado>


            <Styled.MenuLogoFechado src={'../../../../public/images/medic.svg'} />

            <MenuItemFechado Icon={FaHome}  To='/' />
            <MenuItemFechado Icon={FaSignInAlt}  To='/login' />

            <MenuItemFechado Icon={FaPlus}  To='/paciente' />
            <MenuItemFechado Icon={FaTasks}  To='/listaVacina'  />

            <MenuItemFechado Icon={ImDroplet} To='/cadastroVacina' />


             
            </Styled.MenuFechado>

            
        </>
    )
}

export default MenuFechado
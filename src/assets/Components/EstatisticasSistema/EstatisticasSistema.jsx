import CardEstatistica from '../CardEstatistica/CardEstatistica';
import * as Styled from './EstatisticasSistema.style';
import React, { useState, useEffect } from "react";
import { ImUsers, ImDroplet } from 'react-icons/im';

import { FaLaptopMedical } from 'react-icons/fa';

function EstatisticasSistema() {
  const [pacientes, setPacientes] = useState([]);
  const [vacinas, setVacinas] = useState([]);


  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`src/server/db.json`);
      const data = await response.json();
      return data[endpoint];
    } catch (error) {
      console.error(`Erro ao obter ${endpoint}:`, error);
      return [];
    }
  };

  useEffect(() => {
    const getPacientes = async () => {
      const pacientesDoDB = await fetchData('pacientes');
      setPacientes(pacientesDoDB);
    };

    const getVacinas = async () => {
      const vacinasDoDB = await fetchData('vacinas');
      setVacinas(vacinasDoDB);
    };


    getPacientes();
    getVacinas();

  }, []);

  const totalPacientes = () => {
    return pacientes.length;
  };

  const totalVacinas = () => {
    return vacinas.length;
  };


  const dataCard = [
    {
      id: '1',
      icone: <ImUsers/>,
      resultado: totalPacientes(),
      legenda: 'Pacientes',
    },
    {
      id: '2',
      icone: <FaLaptopMedical/>,
      resultado: totalVacinas(),
      legenda: 'Vacinas',
    },

  ];

  return (
    <>
      <Styled.ContainerEstatisticas>
        <h2>Estatísticas do Sistema</h2>
        <Styled.ContainerCardEstatisticas>
          {dataCard.map(estatistica => (
            <CardEstatistica key={estatistica.id} dataCard={estatistica}/>
          ))}
        </Styled.ContainerCardEstatisticas>
      </Styled.ContainerEstatisticas>
    </>
  );
}

export default EstatisticasSistema;


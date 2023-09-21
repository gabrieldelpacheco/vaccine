import * as Styled from './FormVacina.style';
import { useState } from 'react'

import { VacinaService } from '../../../Service/User/Vacina.service';

import { useForm } from 'react-hook-form';
import { InputComponent } from '../Form/InputComponent/InputComponent';
import { Switch, Spin } from 'antd';


export const FormVacina = ({paciente}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitForm = async (vacinaData) => {
  
    const data = {...vacinaData, pacienteId: paciente.id}
    const vacina = await VacinaService.CreateVacina(data);

    if (!vacina) {
      alert('Vacina Cadastrada');
      reset();

    } else {
      alert('Vacina não cadastrado');
    }

  }

  const [isLoading, setIsLoading] = useState()

  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>

      <Styled.Header>
        <Styled.Title>Vacina de {paciente.nome}</Styled.Title>


        <Styled.LabelSwitch>
          Editar
        </Styled.LabelSwitch>

        <Styled.SwitchBtn>
          <Switch /* defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange} */ />
        </Styled.SwitchBtn>

        <Styled.ButtonDel $width={'10%'} $active={!errors.email && !errors.password} type='button' disabled={errors.email || errors.password} >Deletar</Styled.ButtonDel>
        <Styled.Button onClick={() => setIsLoading(true)}  $width={'10%'} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>{isLoading ? <Spin/> : 'Salvar'}</Styled.Button>
      </Styled.Header>


      <Styled.MainForm $width={'100%'}>
        <Styled.InputGroup>

          <InputComponent $width={'350%'}
            id='nomeVacina'
            type='string'
            placeholder='Digite o nome da vacina'
            label='Motivo para vacinação'
            name='nomeVacina'
            register={{
              ...register('nomeVacina', {
                required: true,
                minLenght: 8 ,
                maxLenght: 80 ,
              })
            }}
            error={errors.motivo}
          />
          <InputComponent $width={'350%'}
            id='nomeLaboratorio'
            type='string'
            placeholder='Digite o nome do laboratório'
            label='Nome do laboratório'
            name='nomeLaboratorio'
            register={{
              ...register('nomeLaboratorio', {
                required: true,
                minLenght: 8 ,
                maxLenght: 80 ,
              })
            }}
            error={errors.motivo}
          />

          <InputComponent $width={'100%'}
            id='dataAplicacao'
            type='date'
            placeholder='Digite a data'
            label='Data da aplicação'
            name='dataAplicacao'
            register={{
              ...register('dataAplicacao', {
                required: true,
              })
            }}
            error={errors.dataVacina}
          />

          <InputComponent $width={'100%'}
            id='horaAplicacao'
            type='hour'
            placeholder='Digite o hora da aplicação'
            label='Hora da Vacina'
            name='horaAplicacao'
            register={{
              ...register('horaAplicacao', {
                required: true,
              })
            }}
            error={errors.hora}
          />
          <InputComponent $width={'100%'}
            id='quantidadeAplicacao'
            type='number'
            placeholder='Quantidade de ml aplicados'
            label='Quantidade em ml aplicado'
            name='quantidadeAplicacao'
            register={{
              ...register('quantidadeAplicacao', {
                required: true,
              })
            }}
            error={errors.hora}
          />
        </Styled.InputGroup>

        <Styled.InputGroup  >
          <InputComponent $height={'100px'}
            id='observacao'
            type='textarea'
            placeholder='Qual o motivo da vacinação'
            name='observacao'
            label='Observação'
            register={{
              ...register('observacao', {
                required: false,
                minLenght: 8 ,
                maxLenght: 8000 ,
              })
            }}
            error={errors.descProb}
          />

        </Styled.InputGroup>
      </Styled.MainForm>
    </Styled.Form>
  )
}
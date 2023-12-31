import * as Styled from './FormPaciente.style';
import { useEffect, useState } from 'react';


import { useForm } from 'react-hook-form';
import { InputComponent } from '../Form/InputComponent/InputComponent';
import { PacienteService } from '../../../../src/Service/User/Paciente.service';
import { Switch, Spin } from 'antd';

import { SelectComponent } from '../Form/SelectComponent/SelectComponent';
import { CEPService } from '../../../Service/User/User.CEP'


export const FormPaciente = () => {

  const genders = [
    {
      id: 1,
      value: 'f',
      label: 'Feminino'
    },

    {
      id: 2,
      value: 'm',
      label: 'Masculino'
    },

    {
      id: 3,
      value: 'o',
      label: 'Outros'
    },

    {
      id: 4,
      value: 'n',
      label: 'Prefiro não responder'
    }
  ];

  const estadoCivil = [
    {
      id: 1,
      value: 'S',
      label: 'Solteiro(a)'
    },

    {
      id: 2,
      value: 'c',
      label: 'Casado(a)'
    },

    {
      id: 3,
      value: 'd',
      label: 'Divorciado(a)'
    },

    {
      id: 4,
      value: 'ou',
      label: 'Outro'
    }
  ];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm()



   const createPaciente = (pacienteData) => {
    PacienteService.CreatePaciente(pacienteData)
      .then(response => {
        console.log('Paciente cadastrado com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao cadastrar paciente:', error);
      });
  };
  

 const deletePaciente = (pacienteData) => {
    PacienteService.DeletePaciente(pacienteData.nome)
      .then(response => {
        console.log('Paciente deletado com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao deletar paciente:', error);
      });
  };

  
  const buscaCEP = async () => {
    CEPService.Get(watch("cep"))
      .then(response => {
        console.log(response)
        setValue('cidade', response.localidade)
        setValue('uf', response.uf)
        setValue('numRua', response.numRua)
        setValue('bairro', response.bairro)
      })

   
  };

  const submitForm = async (pacienteData) => {


   const paciente = await PacienteService.CreatePaciente(pacienteData);

    if (!paciente) {
      alert('Novo Paciente Cadastrado');
      reset();
    
    } else {
      alert('Paciente não cadastrado');
    }

  }

  useEffect(() => {
    const cepPaciente = watch("cep") || ""
    if(cepPaciente.length > 7) {
         buscaCEP(cepPaciente)
    }

  
  },[watch("cep")])

  const [isLoading, setIsLoading] = useState()

  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>

      <Styled.Header>
        <Styled.Title>Identificação</Styled.Title>


        <Styled.LabelSwitch>
          Editar
        </Styled.LabelSwitch>

        <Styled.SwitchBtn>
          <Switch/>
        </Styled.SwitchBtn>


        <Styled.ButtonDel $width={'10%'} onClick={deletePaciente} $active={!errors.email && !errors.password} type='button' disabled={errors.email || errors.password}>Deletar</Styled.ButtonDel>
       
        <Styled.Button onClick={() => setIsLoading(true)} $width={'10%'} onSubmit={createPaciente} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>{isLoading ? <Spin/> : 'Salvar'}</Styled.Button>
      </Styled.Header>


      <Styled.MainForm $width={'100%'}>
        <Styled.InputGroup>

          <InputComponent $width={'100%'}
            id='nome'
            type='string'
            placeholder='Digite seu Nome'
            label='Nome Completo'
            name='nome'
            
              register={{
           ...register('nome', {
              required: true,
              minLenght: 4 ,
              maxLenght: 80 ,
          })
            }}
            error={errors.nome}
          />

          <SelectComponent $width={'20%'}
            id='genero'
            name='genero'
            label={'Gênero'}
            options={genders}
            register={{
              ...register('genero', {
                   required: true,
              })
            }}
            error={errors.genero}
          />

          <InputComponent $width={'10 %'}
            id='nasc'
            type='date'
            name='nasc'
            placeholder='Data Nascimento'
            label='Data Nascimento'
              register={{
           ...register('nasc', {
              required: true,

          })
            }}
            error={errors.nasc}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>

          <InputComponent $width={'100%'}
            id='cpf'
            type='text'
            name='cpf'
            placeholder='Digite seu CPF'
            label='CPF'
              register={{
           ...register('cpf', {
              required: true,
             /*  required: false, */
          })
            }}
            error={errors.cpf}
          />

          <InputComponent $width={'100%'}
            id='rg'
            type='text'
            name='rg'
            placeholder='Digite seu RG'
            label='RG'
              register={{
           ...register('rg', {
              required: true,
              maxLenght: 20 ,
          })
            }}
            error={errors.rg}
          />

          <SelectComponent $width={'30%'}
            id='estadoCivil'
            name='estadoCivil'
            label={'Estado Civil'}
            options={estadoCivil}
            register={{
              ...register('estadoCivil', {
                required: true,
                
              })
            }}
            error={errors.estadoCivil}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>

          <InputComponent $width={'100%'}
            id='tel'
            type='number'
            placeholder='Telefone'
            name='tel'
            label='Telefone'
              register={{
           ...register('tel', {
              required: true,
             /* required: false, */
          })
            }}
            error={errors.tel}
          />

          <InputComponent $width={'100%'}
            id='email'
            type='email'
            placeholder='Digite o seu email'
            name='email'
            label='E-mail'
              register={{
           ...register('email', {
              required: false,
            /* required: false, */
          })
            }}
            error={errors.email}
          />

         
        </Styled.InputGroup>
        <Styled.InputGroup>

<InputComponent $width={'100%'}
  id='emergencia'
  type='text'
  placeholder='Digite telefone'
  name='emergencia'
  label='Contato de Emergência'
    register={{
 ...register('emergencia', {
    required: true,
   /* required: false, */
})
  }}
  error={errors.tel}
/>

<InputComponent $width={'100%'}
  id='alergias'
  type='text'
  placeholder='Possui alergias? Cite quais.'
  name='alergias'
  label='Alergias'
    register={{
 ...register('alergias', {
  required: true,
})
  }}
  error={errors.email}
/>

</Styled.InputGroup>




        <Styled.Header>
        <Styled.Title>
          Dados do Endereço
        </Styled.Title>
        </Styled.Header>

        
        <Styled.InputGroup>

          <InputComponent $width={'100%'}
            id='cep'
            type='text'
            placeholder='Informe o CEP'
            name='cep'
            label='CEP'
                register={{
           ...register('cep')
            }}
            error={errors.cep}
          />

          <InputComponent $width={'100%'}
            id='cidade'
            type='string'
            placeholder='Digite a Cidade'
            name='cidade'
            label='Cidade'
                       register={{
           ...register('cidade', {
              required: false,
          })
            }}
            error={errors.cidade}
          />

          <InputComponent $width={'100%'}
            id='uf'
            type='string'
            placeholder='Estado'
            name='uf'
            label='Estado'
    
              register={{
           ...register('uf', {
              required: false,
          })
            }}
            error={errors.uf}
          />

        </Styled.InputGroup>

            
        <Styled.InputGroup>

          <InputComponent $width={'500%'}
            id='logradouro'
            type='string'
            placeholder='Informe seu endereço'
            name='rua'
            label='Endereço'
    
              register={{
           ...register('logradouro', {
              required: false,
          })
            }}
            error={errors.rua}
          />

          <InputComponent $width={'100%'}
            id='numRua'
            type='number'
            placeholder='Número'
            label='Número'
            name='numRua'
      
              register={{
           ...register('numRua', {
              required: false,
          })
            }}
            error={errors.numRua}
          />


        </Styled.InputGroup>


        <Styled.InputGroup>

          <InputComponent $width={'100%'}
            id='compl'
            type='string'
            placeholder='Complemento'
            name='compl'
            label='Complemento'
              register={{
           ...register('compl', {
              required: false,
          })
            }}
            error={errors.compl}
          />

          <InputComponent $width={'100%'}
            id='bairro'
            type='string'
            placeholder='Digite o seu bairro'
            name='bairro'
            label='Bairro'
            /* defaultValue={endereco.bairro || ''} */
              register={{
           ...register('bairro', {
              required: false,
          })
            }}
            error={errors.bairro}
          />

          <InputComponent $width={'100%'}
            id='refEnd'
            type='string'
            placeholder='Referência'
            name='refEnd'
            label='Ponto de Referência'
              register={{
           ...register('refEnd', {
              required: false,
          })
            }}
            error={errors.refEnd}
          />

</Styled.InputGroup>
      </Styled.MainForm>




    </Styled.Form>
  )
}
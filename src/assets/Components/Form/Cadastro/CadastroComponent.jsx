import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext, useState} from 'react';

import { InputComponent } from '../InputComponent/InputComponent';
import * as Styled from './CadastroComponent.style';
import { AuthContext } from '../../../Context/Auth/auth.context';
import { UserService } from '../../../../Service/User/User.service';

import { Spin } from 'antd';

export const FormCadastroComponent = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },  
  } = useForm()

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext)

  const submitForm = async (data) => {
    const { email, password, confirmPassword } = data;

    const newUser = {
      email,
      password,
    }
    const user = await UserService.ShowByEmail(email);  

    if(user) {
      alert('Usuário já cadastrado');
      reset();
      return;
    }
    if(password===confirmPassword){
      await UserService.CreateUser(newUser);
      alert('Usuario cadastrado com sucesso!')
      reset();
      redirectToLogin();
    }

  }

  const redirectToLogin = () => {

    navigate('/login')
  }


  const [isLoading, setIsLoading] = useState()

  return(
    <Styled.Form onSubmit={ handleSubmit(submitForm) }>
          
      <Styled.Header>
        <Styled.Title>Cadastre usuario</Styled.Title>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent
          id='email'
          type='email' 
          placeholder='Digite seu email' 
          label='E-mail'
          register={{...register('email', {
              required: true, 
              validate: { matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) }
            })
          }}
          error={ errors.email }
        />
        <InputComponent
          id='password'
          type='password'
          placeholder='Digite sua senha'
          label='Senha'
          register={{...register('password', { 
            required: true, 
            minLength: 8,
           })
          }}
          error={ errors.password }
        />
        <InputComponent
          id='confirmPassword'
          type='password'
          placeholder='Confirme sua senha'
          label='Confirmar senha'
          register={{...register('confirmPassword', { 
            required: true, 
            minLength: 8,
           })
          }}
          error={ errors.confirmPassword }
        />
      </Styled.InputGroup>

      <Styled.Button onClick={() => setIsLoading(true)} $active={ !errors.email && !errors.password } type='submit' disabled={ errors.email || errors.password } > {isLoading ? <Spin/> : 'Entrar'} </Styled.Button>

      <Styled.Action>
          <Styled.LabelRecuperarSenha onClick={() => alert('Você receberá um e-mail para recuperar a sua senha')}>Esqueceu a senha?</Styled.LabelRecuperarSenha>
      </Styled.Action>
    </Styled.Form>
  )
}
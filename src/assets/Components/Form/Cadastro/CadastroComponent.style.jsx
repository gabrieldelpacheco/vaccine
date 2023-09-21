import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Form = styled.form`
  display: inline-flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.625rem;
  background: #FFF;
  min-width: 320px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  
`;

export const InputGroup = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 95%;
  border-radius: 0.3125rem;
  background: ${({ $outlined }) => { return $outlined ? 'transparent' : '#3bb44a'}};
  border:  ${({ $outlined }) => { return !$outlined ? 0 : '1px solid #3bb44a'}};
  color: ${({ $outlined }) => { return !$outlined ? '#EFEFEF' : '#3bb44a'}};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  opacity: ${({$active}) => { return $active ? 1 : .5 }};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  $outlined: PropTypes.bool
}

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Title = styled.legend`
  color: #3bb44a;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
`;


export const LabelRecuperarSenha = styled.button`
  display: flex;
    justify-content: center;
    width: 100%;
    color: #3bb44a;
    font-size: .7rem;
    border: none;
    background-color: transparent;
  
`;

import styled from 'styled-components';
import { useModal } from './modal/Modal.Provider';
import ButtonComponent from './Button';
import confirmation from '../assets/confirm.svg';

export default function ConfirmationComponent() {
  const { closeModal } = useModal();

  return (
    <Wrapper>
      <AttentionImage src={confirmation} />
      <p>Sucesso!</p>
      <p>O usuário foi cadastrado na base de dados.</p>
      <ButtonComponent onClick={closeModal}>
        <p>Confirmar</p>
      </ButtonComponent>{' '}
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fafafa;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  max-width: 50rem;
`;

const AttentionImage = styled.img`
  width: 150px;
`;

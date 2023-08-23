import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useModal } from './modal/Modal.Provider';
import ButtonComponent from './Button';
import ConfirmationComponent from './Confirmation';

export default function ContactForm({ contact, onEdit }: ContactFormType) {
  const { register, handleSubmit, reset } = useForm({ defaultValues: contact });

  useEffect(() => {
    reset(contact);
  }, [contact, reset]);

  const inputNames: InputNamesType = [
    'name',
    'username',
    'email',
    'address.street',
    'address.suite',
    'address.city',
    'address.zipcode',
    'phone',
    'website',
    'company.name',
    'company.catchPhrase',
    'company.bs',
  ];

  const labelNames = [
    'Nome*',
    'Nome de Usuário*',
    'Email*',
    'Rua',
    'Número',
    'Cidade',
    'CEP*',
    'Telefone',
    'Site',
    'Empresa',
    'Frase de Efeito',
    'BS',
  ];

  const { openModal, closeModal } = useModal();

  return (
    <Wrapper
      onSubmit={handleSubmit(async (contact) => {
        await onEdit(contact);
        openModal(<ConfirmationComponent />);
      })}
    >
      {inputNames.map((inputName, id) => (
        <label key={id}>
          {labelNames[id]}
          {labelNames[id] === 'Nome*' ||
          labelNames[id] === 'Nome de Usuário*' ||
          labelNames[id] === 'Email*' ? (
            <input type="text" {...register(inputName)} required />
          ) : (
            <input type="text" {...register(inputName)} />
          )}
        </label>
      ))}
      <ButtonComponent
        onClick={(event) => {
          event.preventDefault();
          closeModal();
        }}
      >
        <p>Cancelar</p>
      </ButtonComponent>
      <ButtonComponent>
        <p>Salvar</p>
      </ButtonComponent>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #d9d9d9;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  display: grid;
  grid-template-columns: 50% auto;
  gap: 1.5rem;
  justify-items: center;
  width: 90%;
  max-width: 40rem;

  @media (max-width: 767px) {
    padding: 1rem;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  input {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
    width: 100%;
    border: none;
    cursor: text;
    padding: 8px 25px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #d9d9d9;
    color: #000;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    height: 2.5rem;

    &:focus {
      border: none;
      outline: none;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      border: 1px solid #d9d9d9;
    }
  }
`;

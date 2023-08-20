import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useModal } from './modal/Modal.Provider';

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
    'Rua*',
    'Número*',
    'Cidade*',
    'CEP*',
    'Telefone*',
    'Site',
    'Empresa',
    'Frase de Efeito',
    'BS',
  ];

  const { closeModal } = useModal();

  return (
    <Wrapper
      onSubmit={handleSubmit(async (contact) => {
        await onEdit(contact);
        closeModal();
      })}
    >
      {inputNames.map((inputName, id) => (
        <label key={id}>
          {labelNames[id]}
          <input type="text" {...register(inputName)}></input>
        </label>
      ))}
      <Button
        onClick={(event) => {
          event.preventDefault();
          closeModal();
        }}
      >
        Voltar
      </Button>
      <Button>Salvar</Button>
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
  grid-template-columns: 60% auto;
  gap: 0.5rem;
  width: 60%;
  max-width: 50rem;

  label {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  input {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #000;
`;

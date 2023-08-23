import styled from 'styled-components';
import ButtonComponent from './Button';
import ContactForm from './ContactForm';
import { useModal } from './modal/Modal.Provider';
import { useState } from 'react';
import edit from '../assets/edit.svg';
import trash from '../assets/trash.svg';

const ContactListComponent = ({
  contactList,
  setContactList,
}: ContactListComponentType) => {
  const deleteContact = (id: number) => {
    const updatedArray = contactList.filter((_, index) => index !== id);
    setContactList(updatedArray);
  };

  const editContactHandle = (contact: ContactType, id: number) => {
    if (id) contactList[id] = contact;
  };

  const { openModal } = useModal();

  const [orderedContact, setOrderedContact] = useState('');

  const setSortedField = () => {
    const orderedContactList = [...contactList].sort((a, b) => {
      if (orderedContact === 'asc') return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });
    setContactList(orderedContactList);
    setOrderedContact(orderedContact === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Container>
      <TableHeader>
        <Title>
          <p onClick={setSortedField}>Nome</p>
        </Title>
        <Title>Email</Title>
        <Title>Telefone</Title>
        <TitleButton></TitleButton>
      </TableHeader>
      <TableBody>
        {contactList.map((contato, id) => (
          <Row key={id}>
            <Column data-cell="Nome" align="center">
              {contato.name}
            </Column>
            <Column data-cell="Email" align="center">
              {contato.email}
            </Column>
            <Column data-cell="Telefone" align="center">
              {contato.phone}
            </Column>
            <ButtonColumn align="center">
              <ButtonComponent
                variant="transition"
                color="secondary"
                onClick={() => {
                  openModal(
                    <ContactForm
                      contact={contactList[id]}
                      onEdit={(contact: ContactType) =>
                        editContactHandle(contact, id)
                      }
                    ></ContactForm>,
                  );
                }}
              >
                <div>
                  <Image src={edit} />
                  <p>Editar</p>
                </div>
              </ButtonComponent>
              <ButtonComponent
                variant="transition"
                onClick={() => deleteContact(id)}
              >
                <div>
                  <Image src={trash} />
                  <p>Excluir</p>
                </div>
              </ButtonComponent>
            </ButtonColumn>
          </Row>
        ))}
      </TableBody>
    </Container>
  );
};

export default ContactListComponent;

const Container = styled.table`
  background-color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 1rem 2rem;
  }
`;

const TableHeader = styled.thead`
  background-color: #d9d9d9;
`;

const Title = styled.th`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #000;
  width: 27%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const TitleButton = styled.th`
  width: 19%;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const Image = styled.img``;

const Column = styled.td`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #000;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 25% auto;
    padding: 0.5rem 1rem;

    &:before {
      content: attr(data-cell);
      font-weight: 700;
      color: black;
      text-transform: capitalize;
    }
  }
`;

const ButtonColumn = styled(Column)`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 3rem;
  }
`;

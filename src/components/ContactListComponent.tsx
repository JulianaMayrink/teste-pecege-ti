import styled from 'styled-components';
import ButtonComponent from './Button';
import ContactForm from './ContactForm';
import { useModal } from './modal/Modal.Provider';

const ContactListComponent = ({
  contactList,
  setContactList,
}: ContactListComponentType) => {
  const deleteContact = (id: number) => {
    const updatedArray = contactList.filter((_, index) => index !== id);
    setContactList(updatedArray);
  };

  const editContactHandle = (contact: ContactType, id: number) => {
    if (id) {
      contactList[id] = contact;
      console.log('contact ContactList', contact);
    }
  };

  const { openModal } = useModal();

  const setSortedField = () => {
    setContactList();
  };

  return (
    <>
      <Container id="#myTable2 tbody">
        <TableHeader>
          <Title>
            Nome
            <button
            // onClick={() => setSortedField('name')}
            ></button>
          </Title>
          <Title>Email</Title>
          <Title>Telefone</Title>
          <Title></Title>
          <Title></Title>
        </TableHeader>
        <TableBody>
          {contactList.map((contato, id) => (
            <Row key={id}>
              <Column align="center">{contato.name} </Column>
              <Column align="center">{contato.email} </Column>
              <Column align="center">{contato.phone} </Column>
              <Column align="center">
                <ButtonComponent
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
                  <p>Editar</p>
                </ButtonComponent>
              </Column>
              <Column align="center">
                <ButtonComponent onClick={() => deleteContact(id)}>
                  <p>Excluir</p>
                </ButtonComponent>
              </Column>
            </Row>
          ))}
        </TableBody>
      </Container>
    </>
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
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const Column = styled.td`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #000;
  border-bottom: 1px solid #d9d9d9;
`;

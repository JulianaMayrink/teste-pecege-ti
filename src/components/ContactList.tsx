import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type ContactType = {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const ContactList = () => {
  const [contatos, setContatos] = useState<Array<ContactType>>([]);

  function getContatos() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const data = response.data;
        const newData: Array<ContactType> = data.map((element: ContactType) => {
          return {
            name: element.name,
            username: element.username,
            email: element.email,
            address: {
              street: element.address.street,
              suite: element.address.suite,
              city: element.address.city,
              zipcode: element.address.zipcode,
              geo: {
                lat: element.address.geo.lat,
                lng: element.address.geo.lng,
              },
            },
            phone: element.phone,
            website: element.website,
            company: {
              name: element.company.name,
              catchPhrase: element.company.catchPhrase,
              bs: element.company.bs,
            },
          };
        });
        setContatos(newData);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getContatos();
  }, []);

  const deleteContact = (id: number) => {
    const updatedArray = contatos.filter((_, index) => index !== id);
    setContatos(updatedArray);
  };

  return (
    <Container>
      <TableHeader>
        <Title>Nome</Title>
        <Title>Email</Title>
        <Title>Telefone</Title>
        <Title></Title>
        <Title></Title>
      </TableHeader>
      <TableBody>
        {contatos.map(({ name, email, phone }, id) => (
          <Row key={id}>
            <Column align="center">{name} </Column>
            <Column align="center">{email} </Column>
            <Column align="center">{phone} </Column>
            <Column align="center">
              <button type="button" onClick={() => deleteContact(id)}>
                Excluir
              </button>
            </Column>
            <Column align="center"></Column>
          </Row>
        ))}
      </TableBody>
    </Container>
  );
};

export default ContactList;

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

import axios from 'axios';
import { useEffect, useState } from 'react';
import ContactListComponent from '../components/ContactListComponent';
import AddButtonComponent from '../components/AddButton';
import styled from 'styled-components';

const Home = () => {
  const [contactList, setContactList] = useState<Array<ContactType>>([]);

  const getContatos = () => {
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
        setContactList(newData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getContatos();
  }, []);

  return (
    <Container>
      <Wrapper>
        <AddButtonComponent
          setContactList={setContactList}
          contactList={contactList}
        ></AddButtonComponent>
      </Wrapper>
      <ContactListComponent
        setContactList={setContactList}
        contactList={contactList}
      ></ContactListComponent>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

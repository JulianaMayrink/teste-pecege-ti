import axios from 'axios';
import { useEffect, useState } from 'react';
import AddButtonComponent from '../components/AddButton';
import styled from 'styled-components';
import SearchBarComponent from '../components/SearchBar';
import ContactTable from '../components/ContactTable';

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

  const [searchList, setSearchList] = useState<Array<ContactType>>([]);

  return (
    <Container>
      <Wrapper>
        <SearchBarComponent
          type="text"
          placeholder="Pesquisar"
          contactList={contactList}
          resultList={(searchFilter) => setSearchList(searchFilter)}
        />
        <AddButtonComponent
          setContactList={setContactList}
          contactList={contactList}
        />
      </Wrapper>
      <ContactTable
        setContactList={setContactList}
        contactList={searchList.length > 0 ? searchList : contactList}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem 4rem;

  @media (max-width: 1280px) {
    padding: 2rem;
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  grid-template-columns: 50% auto;
`;

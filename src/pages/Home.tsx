import axios from 'axios';
import { useEffect, useState } from 'react';
import ContactListComponent from '../components/ContactListComponent';
import AddButtonComponent from '../components/AddButton';

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
    <>
      <AddButtonComponent
        setContactList={setContactList}
        contactList={contactList}
      ></AddButtonComponent>
      <ContactListComponent
        setContactList={setContactList}
        contactList={contactList}
      ></ContactListComponent>
    </>
  );
};

export default Home;

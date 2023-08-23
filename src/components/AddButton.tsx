import ButtonComponent from './Button';
import ContactForm from './ContactForm';
import { useModal } from './modal/Modal.Provider';
import addUser from '../assets/addUser.svg';

const AddButtonComponent = ({
  contactList,
  setContactList,
}: ContactListComponentType) => {
  const { openModal } = useModal();

  const AddContact = (contact: ContactType) => {
    setContactList([...contactList, contact]);
  };

  return (
    <ButtonComponent
      onClick={() =>
        openModal(
          <ContactForm
            onEdit={(contact: ContactType) => AddContact(contact)}
          ></ContactForm>,
        )
      }
    >
      <img src={addUser} />
      <p>Adicionar</p>
    </ButtonComponent>
  );
};

export default AddButtonComponent;

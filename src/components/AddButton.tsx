import ButtonComponent from './Button';
import ContactForm from './ContactForm';
import { useModal } from './modal/Modal.Provider';

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
      <p>Adicionar</p>
    </ButtonComponent>
  );
};

export default AddButtonComponent;

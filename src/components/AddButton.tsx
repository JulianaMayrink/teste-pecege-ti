import ButtonComponent from './Button';
import ContactForm from './ContactForm';
import { useModal } from './modal/Modal.Provider';
import addUser from '../assets/addUser.svg';

const AddButtonComponent = ({
  contactList,
  setContactList,
}: ContactTableType) => {
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
      <div>
        <img src={addUser} />
        <p>Adicionar</p>
      </div>
    </ButtonComponent>
  );
};

export default AddButtonComponent;

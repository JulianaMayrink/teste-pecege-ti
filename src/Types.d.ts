type ContactType = {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type ContactFormType = {
  contact?: ContactType;
  onEdit: (contact: ContactType) => void;
};

type InputNamesType = Array<
  | keyof ContactType
  | 'address.street'
  | 'address.suite'
  | 'address.city'
  | 'address.zipcode'
  | 'company.name'
  | 'company.catchPhrase'
  | 'company.bs'
>;

type ContactListComponentType = {
  contactList: Array<ContactType>;
  setContactList: (newContactList: Array<ContactType>) => void;
};

type SearchBarComponentType = {
  type: string;
  placeholder: string;
  contactList: Array<ContactType>;
  resultList: any;
};

type ButtonComponentType = {
  onClick: () => void;
  children: JSX.Element;
  color?: 'primary' | 'secondary';
  variant: 'default' | 'transition';
};

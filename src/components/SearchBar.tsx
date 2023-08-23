import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const SearchBarComponent = ({
  type,
  placeholder,
  contactList,
  resultList,
}: SearchBarComponentType) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchFilter = contactList.map((contato) => {
    if (contato.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
      return contato;
  });

  useEffect(() => {
    if (searchTerm) {
      resultList(searchFilter.filter((contato) => contato !== undefined));
    }
  }, [searchTerm, searchFilter]);

  return (
    <SearchBar
      type={type}
      placeholder={placeholder}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
export default SearchBarComponent;

const SearchBar = styled.input`
  border: none;
  cursor: text;
  padding: 8px 25px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #d9d9d9;
  color: #000;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  height: 2.5rem;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid #d9d9d9;
  }
`;

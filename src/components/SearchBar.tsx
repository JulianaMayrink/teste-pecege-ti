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
    ></SearchBar>
  );
};
export default SearchBarComponent;

const SearchBar = styled.input`
  border: none;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #000;
`;

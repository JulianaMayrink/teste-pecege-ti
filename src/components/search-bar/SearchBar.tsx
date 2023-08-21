import { styled } from 'styled-components';

const SearchBarComponent = ({
  type,
  placeholder,
  onChange,
}: SearchBarComponentType) => {
  return (
    <SearchBar
      type={type}
      placeholder={placeholder}
      onChange={onChange}
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

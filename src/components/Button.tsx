import styled from 'styled-components';

type ButtonComponentType = {
  onClick: () => void;
  children: JSX.Element;
};

const ButtonComponent = ({ onClick, children }: ButtonComponentType) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #000;
`;

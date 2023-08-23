import styled from 'styled-components';

const ButtonComponent = ({ onClick, children, color }: ButtonComponentType) => {
  return (
    <DefaultButton color={color ?? 'primary'} onClick={onClick}>
      {children}
    </DefaultButton>
  );
};

export default ButtonComponent;

const DefaultButton = styled.button<{
  size: string;
  color: string;
  disableShadow: boolean;
}>`
  --primary: #f20c3a;
  --secondary: #ffffff;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({ color }) => (color === 'primary' ? '#FFF' : '#f20c3a')};
  border-color: ${({ color }) => (color === 'primary' ? '#FFF' : '#f20c3a')};
  background-color: ${({ color }) => `var(--${color})`};
  border-radius: 6px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  p {
    margin: 0;
  }
  &:hover {
    border-color: ${({ color }) => (color === 'primary' ? '#FFF' : '#f20c3a')};
    box-shadow: 8px 8px #f20c3a;
    transition: 0.3s;
  }
`;

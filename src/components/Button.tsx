import styled from 'styled-components';

const ButtonComponent: React.FC<{
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  children: JSX.Element;
  variant: 'default' | 'transition';
}> = ({ variant = 'default', color, onClick, children }) => {
  // const ButtonComponent = ({ onClick, children, color, }: ButtonComponentType) => {

  switch (variant) {
    case 'default':
      return (
        <DefaultButton color={color ?? 'primary'} onClick={onClick}>
          {children}
        </DefaultButton>
      );
    case 'transition':
      return (
        <TransitiontButton color={color ?? 'primary'} onClick={onClick}>
          {children}
        </TransitiontButton>
      );
  }
};
export default ButtonComponent;

const DefaultButton = styled.button<{
  color: string;
}>`
  --primary: #f20c3a;
  --secondary: #ffffff;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({ color }) => (color === 'primary' ? '#FFF' : '#f20c3a')};
  border-color: #f20c3a;
  background-color: ${({ color }) => `var(--${color})`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 45px;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;

  div {
    display: flex;
    width: 100%;
    gap: 0.5rem;
  }

  img {
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
  }

  p {
    margin: 0;
    right: 0%;
    transition-duration: 0.3s;
  }
  &:hover {
    transform: scale(1.05);
    border-color: #f20c3a;
  }
`;

const TransitiontButton = styled(DefaultButton)`
  cursor: pointer;
  overflow: hidden;
  transition-duration: 0.3s;
  width: 45px;
  justify-content: flex-start;

  div {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    &:hover {
    }
  }

  img {
    margin: 0;
  }

  p {
    transition-duration: 0.3s;
    opacity: 0;
    padding: 0;
  }

  &:hover {
    width: 100px;
    transition-duration: 0.3s;
    border-color: #f20c3a;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      opacity: 1;
    }
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

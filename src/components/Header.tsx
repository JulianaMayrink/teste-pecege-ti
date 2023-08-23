import styled from 'styled-components';
import logo from '../assets/logoPecege.svg';
const Header = () => {
  return (
    <Container>
      <Logo src={logo}></Logo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #f20c3a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const Logo = styled.img``;

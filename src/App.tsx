import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <Container>
      <Header />
      <ContactContainer>
        <ContactList />
      </ContactContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const ContactContainer = styled.div`
  margin: 32px 16px;
`;

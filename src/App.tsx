import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import { ModalProvider } from './components/modal/Modal.Provider';
import Home from './pages/Home';
// import ButtonComponent from './components/Button';

const App = () => {
  return (
    <Container>
      <Header />
      <ModalProvider>
        <Home />
      </ModalProvider>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

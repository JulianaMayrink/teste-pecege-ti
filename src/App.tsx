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
      <SearchBarAndButtonContainer>
        <div>Barra de pesquisa</div>
        {/* <ButtonComponent onClick={}>Adicionar</ButtonComponent> */}
      </SearchBarAndButtonContainer>

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

const SearchBarAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 2rem;
`;

// const Button = styled.button`
//   background-color: white;
//   border: 1px solid #000;
// `;

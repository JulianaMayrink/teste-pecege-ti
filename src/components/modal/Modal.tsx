import styled from 'styled-components';

const Modal: React.FC<{
  children: JSX.Element;
  closeModal: () => void;
}> = ({ children, closeModal }) => {
  return (
    <OpacityShadow onClick={closeModal}>
      <StyledModal onClick={(event) => event.stopPropagation()}>
        {children}
      </StyledModal>
    </OpacityShadow>
  );
};

export default Modal;

const OpacityShadow = styled.div`
  display: table;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
const StyledModal = styled.div`
  background-color: #d9d9d9;
  top: 6rem;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  width: calc(100% - 3rem);
  max-width: 480px;
  position: relative;
`;

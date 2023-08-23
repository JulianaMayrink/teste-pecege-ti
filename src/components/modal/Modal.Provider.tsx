import { createContext, useContext, useState } from 'react';
import Modal from './Modal';

type ModalProps = {
  onCloseModal?: () => void;
};
type ModalContextType = {
  openModal: (children: JSX.Element, props?: ModalProps) => null;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  closeModal: () => {},
  openModal: () => null,
});
export const ModalProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const [modalProps, setModalProps] = useState<ModalProps>();

  const openModal = (children: JSX.Element, props?: ModalProps) => {
    setModalContent(children);
    setModalProps(props);
    return null;
  };

  const closeModal = () => {
    if (modalProps?.onCloseModal) {
      modalProps?.onCloseModal();
    }
    setModalProps({});
    setModalContent(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      {modalContent && <Modal closeModal={closeModal}>{modalContent}</Modal>}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  return useContext(ModalContext);
};

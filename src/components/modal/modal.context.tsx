import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  Modal,
  Portal,
  Text,
  Provider as PaperProvider,
} from "react-native-paper";

type ModalContextProps = {
  showModal: () => void;
  hideModal: () => void;
  setModal: (...args: any[]) => void;
  visible: boolean;
  modalContent: ReactNode;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | undefined>(
    undefined
  );
  const setModal = (content: ReactNode) => setModalContent(content);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, setModal, visible, modalContent }}
    >
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              paddingVertical: 30,
              paddingHorizontal: 20,
              height: "auto",
              marginHorizontal: 10,
              borderRadius: 9,
            }}
          >
            {modalContent}
          </Modal>
        </Portal>
        {children}
      </PaperProvider>
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalProvider;

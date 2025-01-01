import React, { createContext, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
   const [modalConfig, setModalConfig] = React.useState({});


  const modalContextValue = {
    openModal: (config) => {
        setModalConfig(config);
        setModalOpen(true);
    },
    closeModal: () => {
        setModalOpen(false);
    },
};

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

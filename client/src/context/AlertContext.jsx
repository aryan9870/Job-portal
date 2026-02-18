import { createContext, useState } from "react";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    message: "",
    type: "", // "success" | "error"
  });

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

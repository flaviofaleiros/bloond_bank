import React, { createContext, useState, useContext } from "react";

const RegisterContext = createContext([]);

export default function RegisterProvider({ children }) {
  const [register, setRegister] = useState([]);

  return (
    <RegisterContext.Provider
      value={{
          register,
          setRegister
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  const { register, setRegister } = context;
  return { register, setRegister };
}

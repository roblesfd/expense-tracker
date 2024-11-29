import React, { createContext, ReactNode, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const callFunctionWithTimeOut = (fn: () => void) => {
  setTimeout(() => {
    fn();
  }, 3000);
};

type AuthenticationContextProps = {
  isAuthenticated: boolean;
  user: any | null;
  isLoading: boolean;
  error: string | null;
  success: string | null;
  onRegister: (...args: any[]) => void;
  onLogin: (...args: any[]) => void;
  onLogout: (...args: any[]) => void;
};

const defaultValue = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  success: null,
  onRegister: (...args: any[]) => {},
  onLogin: (...args: any[]) => {},
  onLogout: (...args: any[]) => {},
};

export const AuthenticationContext = createContext<AuthenticationContextProps>({
  ...defaultValue,
});

type AuthenticationContextProviderProps = {
  children: ReactNode;
};

export const AuthenticationContextProvider: React.FC<
  AuthenticationContextProviderProps
> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const auth = getAuth();

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const getUser = userCredential.user;
        setUser(getUser);
        setIsLoading(false);
        setSuccess("Has iniciado sesión");
        callFunctionWithTimeOut(() => setSuccess(""));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        setError(`Error ${errorCode} - ${errorMessage}`);
        callFunctionWithTimeOut(() => setError(""));
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Usuario registrado
        const newUser = userCredential.user;
        setUser(newUser);
        setIsLoading(false);
        setSuccess("Cuenta de usuario creada exitosamente");
        callFunctionWithTimeOut(() => setSuccess(""));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        setError(`Error ${errorCode} - ${errorMessage}`);
        callFunctionWithTimeOut(() => setError(""));
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        setUser(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        setError(`Error ${errorCode} - ${errorMessage}`);
        callFunctionWithTimeOut(() => setError(""));
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        success,
        onRegister,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

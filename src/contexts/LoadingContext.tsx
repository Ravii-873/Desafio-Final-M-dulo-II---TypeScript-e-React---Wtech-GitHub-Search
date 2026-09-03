import { createContext, useContext, useState } from "react";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading(state: boolean): void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType,
);

interface LoadingContextProviderType {
  children: React.ReactNode;
}

export const LoadingContextProvider = ({
  children,
}: LoadingContextProviderType) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLoading(): LoadingContextType {
  const context = useContext(LoadingContext);
  return context;
}

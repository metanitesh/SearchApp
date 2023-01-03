import React, { createContext, useContext, useState } from "react";

interface IStoreContext {
  searchQuery: string;
  setSearchQuery: (search: string) => void;
}
type StoreProviderProps = {
  children: React.ReactNode;
};

const Store = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = { searchQuery, setSearchQuery };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStore = () => {
  const context = useContext(Store);
  if (!context) {
    console.log("Context being used outside of provider");
  }
  return context;
};

import { ReactElement, createContext, useState } from 'react';
import { FileError } from 'react-dropzone';

interface IStateContextProps {
  stateData: InitialGlobalState;
  onReset: Function;
  setSateData: Function;
}

interface InitialGlobalState {
  formData: [];
}

const initialState: InitialGlobalState = {
  formData: [],
};

interface IStateProviderProps {
  children: ReactElement | ReactElement[];
}

export const StateContext = createContext({} as IStateContextProps);

export function StateProvider({ children }: IStateProviderProps) {
  const [stateData, setSateData] = useState(initialState as InitialGlobalState);

  function onReset(): void {
    setSateData((prev) => ({ ...prev, formData: [] }));
  }

  return <StateContext.Provider value={{ stateData, onReset, setSateData }}>{children}</StateContext.Provider>;
}

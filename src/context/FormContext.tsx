import { createContext, useState } from 'react';

import type * as models from '@/models';

const initialState: models.InitialGlobalState = {
  formData: [],
};

export const StateContext = createContext({} as models.IStateContextProps);

export function StateProvider({ children }: models.IStateProviderProps) {
  const [stateData, setSateData] = useState(initialState as models.InitialGlobalState);

  function onReset(): void {
    setSateData((prev) => ({ ...prev, formData: [] }));
  }

  return <StateContext.Provider value={{ stateData, onReset, setSateData }}>{children}</StateContext.Provider>;
}

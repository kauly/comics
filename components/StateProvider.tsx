import * as React from "react";

import { initialState, appReducer } from "../services/state";
import { IState } from "../assets/typing";

export const StateCtx = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  return (
    <StateCtx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateCtx.Provider>
  );
};

export default StateProvider;

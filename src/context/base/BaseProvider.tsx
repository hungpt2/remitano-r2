import { useMemo, useReducer } from 'react';
import { BaseContext } from './BaseContext';
import { BaseState, BaseAction } from './model';

export const userReducer = (state: BaseState, action: BaseAction) => {
  switch (action.type) {
    default: {
      return {
        ...state,
        [action.prop]: action.payload,
      };
    }
  }
};

export const BaseProvider = ({ children }: { children: JSX.Element }) => {
  const initState: BaseState = {
    loading: false,
    userData: {
      email: '',
      id: '',
    },
    isAuthenticated: false,
    media: [],
    mediaPayload: {},
  };
  const [state, dispatch] = useReducer(userReducer, initState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>;
};

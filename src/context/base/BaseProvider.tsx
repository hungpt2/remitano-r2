import { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { BaseContext } from './BaseContext';
import { BaseState, BaseAction } from './model';

const propTypes = {
  children: PropTypes.node,
};

const userReducer = (state: BaseState, action: BaseAction) => {
  switch (action.type) {
    default: {
      return {
        ...state,
        [action.prop]: action.payload,
      };
    }
  }
};

export const BaseProvider = ({ children }: any) => {
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

BaseProvider.propTypes = propTypes;

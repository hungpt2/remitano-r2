import React, { useContext } from 'react';

import { BaseContext } from './BaseContext';
import { BaseAction, BaseState } from './model';

export const useBaseContext = (): { state: BaseState, dispatch: React.Dispatch<BaseAction> } => {
  const userContext = useContext(BaseContext);
  if (!userContext) {
    throw new Error('useBaseContext must be used within a BaseProvider');
  }
  return userContext;
};

export const useBaseState = (): BaseState => useBaseContext().state;

export const useBaseDispatch = (): React.Dispatch<BaseAction> => useBaseContext().dispatch;

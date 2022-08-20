import { createContext } from 'react';
import { BaseState, BaseAction } from './model';

export const BaseContext = createContext<{ state: BaseState, dispatch: React.Dispatch<BaseAction> } | null>(null);

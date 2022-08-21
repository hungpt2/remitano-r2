import {render, cleanup} from '@testing-library/react';
import App from './index';
import { BaseContext } from '../../context/base/BaseContext';

afterEach(cleanup)

beforeEach(() => {
  const createRef = jest.fn();
  jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
      ...originReact,
      createRef: createRef,
    };
  });
})

describe('App', () => {
  it('test App page rendered', () => {
    const dispatchMock = jest.fn();
    const providerProps = {
      state: {
        loading: false,
        userData: {
          email: '',
          id: '',
        },
        isAuthenticated: true,
        media: [],
        mediaPayload: {},
      },
      dispatch: dispatchMock
    }
    const utils = render(
      <BaseContext.Provider value={providerProps}>
        <App />
      </BaseContext.Provider>
    );
    expect(utils).toBeTruthy();
  })
})

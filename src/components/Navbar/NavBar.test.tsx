import {render, cleanup, fireEvent} from '@testing-library/react';
import NavBar from './index';
import { BaseProvider } from '../../context/base';
import { BaseContext } from '../../context/base/BaseContext';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(cleanup)

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => {
    return mockedUsedNavigate;
  },
}));

describe('NavBar', () => {

  it('should redirect to share', () => {
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
        <Router>
          <NavBar />
        </Router>
      </BaseContext.Provider>
    );
    const button = utils.getByText('Share a Movie');
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/share');
  })

  it('should redirect to login', () => {
    const utils = render(
      <BaseProvider>
        <Router>
          <NavBar />
        </Router>
      </BaseProvider>
    );

    const button = utils.getByText('Login');
    fireEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');
  })

  it('should redirect to register', () => {
    const utils = render(
      <BaseProvider>
        <Router>
          <NavBar />
        </Router>
      </BaseProvider>
    );

    const button = utils.getByText('Register');
    fireEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/register');
  })

  it('should logout', () => {
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
        <Router>
          <NavBar />
        </Router>
      </BaseContext.Provider>
    );
    const button = utils.getByText('Logout');
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  })

})

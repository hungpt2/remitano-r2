import {render, cleanup, waitFor} from '@testing-library/react';
import NavBar from './index';
import { BaseContext } from '../../context/base/BaseContext';

afterEach(cleanup)

describe('List Media', () => {

  it('should get blank list', async() => {
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
        <NavBar />
      </BaseContext.Provider>
    );
    const listNode = await waitFor(() => utils.getByTestId('list'));
    expect(listNode.children).toHaveLength(1);
  })

  it('should get list media', async() => {
    const stubInitialState = [
      {
        url: 'url',
        author: 'author',
        description: 'string',
        title: 'string',
      }, {
        url: 'url2',
        author: 'author',
        description: 'string',
        title: 'string',
      }
    ];
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify(stubInitialState));

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
          <NavBar />
      </BaseContext.Provider>
    );
    const listChild = await waitFor(() => utils.getByTestId('list-item-0'));
    expect(listChild).toBeTruthy();
  })
})

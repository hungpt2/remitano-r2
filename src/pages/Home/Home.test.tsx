import {render, cleanup, waitFor} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import { BaseProvider } from '../../context/base';
import Home from './index';

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

describe('Home', () => {
  it('test Home page rendered', async() => {
    const utils = render(
      <BaseProvider>
        <Router>
          <Home />
        </Router>
      </BaseProvider>
    );
    const listChild = await waitFor(() => utils.getByTestId('list'));
    expect(listChild).toBeTruthy();
  })
})

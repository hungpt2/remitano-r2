import {render, cleanup} from '@testing-library/react';
import AppLayout from './AppLayout';

afterEach(cleanup)

describe('AppLayout', () => {
  it('test layout rendered', () => {
    const utils = render(<AppLayout />);
    expect(utils).toBeTruthy();
  })
})

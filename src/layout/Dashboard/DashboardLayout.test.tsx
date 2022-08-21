import {render, cleanup} from '@testing-library/react';
import DashboardLayout from './index';
import {BrowserRouter as Router} from 'react-router-dom';
import { BaseProvider } from '../../context/base';

afterEach(cleanup)

describe('DashboardLayout', () => {
  it('test dashboard layout rendered', () => {
    const utils = render(
      <BaseProvider>
        <Router>
          <DashboardLayout />
        </Router>
      </BaseProvider>
    );
    expect(utils).toBeTruthy();
  })
})

/* eslint-disable  react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import { sampleAPI } from '../../js/axios.config';
import SAMPLE_COMPONENT from '../../components/SAMPLE_COMPONENT';

let mock: MockAdapter;

describe('Component tests', () => {
  beforeEach(() => {
    process.env.REACT_APP_USE_MOCKS = 'false';
    mock = new MockAdapter(axios);
    //   mock
    //     .onGet(sampleAPI.url())
    //     .reply(200, 'Data to be returned from ajax call');
  });

  afterEach(() => {
    mock.reset();
  });

  test('Is accessible', async () => {
    const { container } = render(<SAMPLE_COMPONENT />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Is rendered', async () => {
    render(<SAMPLE_COMPONENT />);
    expect(screen.getByTestId('componentContent')).toBeInTheDocument();
  });
});

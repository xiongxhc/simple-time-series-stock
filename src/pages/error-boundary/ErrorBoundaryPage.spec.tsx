import * as React from 'react';
import ErrorBoundaryPage from './ErrorBoundaryPage';
import {Renderer} from '../../utils/testing/Render';
import {TestID} from '../../utils/testing/Constant';

describe('ErrorFallback', () => {
  it('should display error message', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {getByText, getByTestId} = new Renderer(<ErrorBoundaryPage error={'Custom parent error message'} />).render();
    expect(getByTestId(TestID.ERROR_BOUNDARY_PAGE)).toBeInTheDocument();
    expect(getByText('Something went wrong:')).toBeInTheDocument();
    expect(getByText('Custom parent error message')).toBeInTheDocument();
  });
});

import React from 'react';
import {TestID} from '../../utils/testing/Constant';
import {FallbackProps} from 'react-error-boundary';
export default function ErrorBoundaryPage({error}: FallbackProps) {
  return (
    <div role="alert" data-testid={TestID.ERROR_BOUNDARY_PAGE}>
      <p>Something went wrong:</p>
      <pre>{error.message ?? error}</pre>
    </div>
  );
}

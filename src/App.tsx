import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ErrorBoundary} from 'react-error-boundary';
import HomePage from './pages/home/HomePage';
import ErrorBoundaryPage from './pages/error-boundary/ErrorBoundaryPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={(error) => ErrorBoundaryPage(error)}>
        <HomePage />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;

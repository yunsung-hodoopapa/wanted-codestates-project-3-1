import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Issue from './pages/Issue';
import { QueryClientProvider, QueryClient } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

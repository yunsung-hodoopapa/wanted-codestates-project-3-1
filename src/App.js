import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Issue from './pages/Issue';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './utils/global-styles';
import { BaseRouter, UserRouter } from './utils/router';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <BaseRouter />
        <UserRouter />
      </BrowserRouter>
    </>
  );
}

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import './i18next';

ReactDOM.render(
  <Suspense fallback={<div>Loading ~~~</div>}>
    <GlobalStyles />
    <Typography />
    <App />
  </Suspense>,
  document.getElementById('root')
);

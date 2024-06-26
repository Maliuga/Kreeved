import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Context/AuthContext'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
       <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

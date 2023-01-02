import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Provider from './Providers';


const root = ReactDOM.createRoot(
  document.getElementById('rigel-protocol-p2p-widget') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider>
    <App />
  </Provider>
  </React.StrictMode>
);



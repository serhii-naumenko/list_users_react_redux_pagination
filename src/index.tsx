import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import { App } from './App';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root')
const Root  = createRoot(rootElement!);

Root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
);

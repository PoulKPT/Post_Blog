import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './router';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App; 
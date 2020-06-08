import React from 'react';
import logo from './logo.svg';
import Main from './components/main';
import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

function App() {

  return (
  	<Provider store={store}>
  		<Main/>
  	</Provider>

  );
}

export default App;


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AlbumsListContainer from './components/AlbumsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlbumsListContainer />
      </Provider>
    );
  }
}

export default App;

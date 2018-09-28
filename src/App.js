import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import Header from './components/Header';
import AlbumsListContainer from './components/AlbumsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <header>
            <Header />
          </header>
          <main>
            <AlbumsListContainer />
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

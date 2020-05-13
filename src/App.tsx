import React from 'react';
import * as dotenv from 'dotenv';
import {useSelector} from 'react-redux';
import toasterHandler from './_helpers/handleToaster';

import './App.css';
import {State} from './model/store-model';
import AppRouting from './components/app-routing';

function App() {
  if (!process.env.NODE_ENV || process.env.REACT_APP_ENV === 'production') {
    dotenv.config({path: '../.env.production.local'});
  } else {
    dotenv.config({path: '../.env.development.local'});
  }

  const appState = useSelector((state: State) => {
    return state.app.toJS();
  });

  toasterHandler(appState.toasterType, appState.toasterMessage);

  return (
    <div className="App">
      <AppRouting loaderVisible={appState.loaderVisible} />
    </div>
  );
}

export default App;

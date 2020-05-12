import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as dotenv from 'dotenv';
import {useSelector, useDispatch} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import notificationHandler from './helpers/handleNotifications';

import './App.css';
import {State} from './model/store-model';

const LoginComponent = lazy(() => import('./screens/login'));
const RegisterComponent = lazy(() => import('./screens/registration'));
const HomeComponent = lazy(() => import('./screens/Home'));
const pageNotFoundComponent = lazy(() => import('./components/page-not-found'));

function App() {
  const dispatch = useDispatch();

  if (!process.env.NODE_ENV || process.env.REACT_APP_ENV === 'production') {
    dotenv.config({path: '../.env.production.local'});
  } else {
    dotenv.config({path: '../.env.development.local'});
  }

  const notification = useSelector((state: State) => {
    return state.notifications.toJS();
  });

  notificationHandler(notification, dispatch);

  // dispatch(notificationAction.clearNotification());

  const client = new ApolloClient({
    uri: `${process.env.REACT_APP_GRAPH_QL_URL}`,
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ToastContainer />
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route path="/login" component={LoginComponent} />
              <Route path="/register" component={RegisterComponent} />
              <Route path="/home" component={HomeComponent} />
              <Route component={pageNotFoundComponent} />
            </Switch>
          </Router>
        </Suspense>
      </ApolloProvider>
    </div>
  );
}

export default App;

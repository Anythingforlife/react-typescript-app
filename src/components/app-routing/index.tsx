import React, {Suspense, lazy} from 'react';
import {ToastContainer} from 'react-toastify';
import {Router, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {storageService} from '../../services/storageService';
import LoaderComponent from '../loader';
import history from '../../_helpers/history';

const LoginComponent = lazy(() => import('../../screens/login'));
const RegisterComponent = lazy(() => import('../../screens/registration'));
const HomeComponent = lazy(() => import('../../screens/Home'));
const pageNotFoundComponent = lazy(() => import('../page-not-found'));

export default function AppRouting(props: any) {
  const client = new ApolloClient({
    uri: `${process.env.REACT_APP_GRAPH_QL_URL}`,
  });
  const security = storageService.getData('security') || {};

  if (!security.token) {
    return (
      <div>
        <ToastContainer />
        <Suspense fallback={<div>Loading...</div>}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={LoginComponent} />
              <Route path="/register" component={RegisterComponent} />
            </Switch>
          </Router>
        </Suspense>
        <LoaderComponent visible={props.loaderVisible} />
      </div>
    );
  }

  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={HomeComponent} />
            <Route component={pageNotFoundComponent} />
          </Switch>
        </Router>
      </Suspense>
      <LoaderComponent visible={props.loaderVisible} />
    </ApolloProvider>
  );
}

import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state_management/store';
import Form from './modules/Form/Form';

function App() {
  const history = createBrowserHistory();
  const path = () => (<Redirect to="/form" />);
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact={true} render={path} />
          <Route path="/form" exact={true} component={Form} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

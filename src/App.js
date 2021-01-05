import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state_management/store';
import HomePage from './modules/HomePage/HomePage';

function App() {
  const history = createBrowserHistory();
  const path = () => (<Redirect to="/home" />);
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact={true} render={path} />
          <Route path="/home" exact={true} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

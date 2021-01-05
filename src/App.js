import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state_management/store';
import EventContainer from './modules/Event/container/EventContainer';
import FormContainer from './modules/Form/container/FormContainer';

function App() {
  const history = createBrowserHistory();
  const path = () => (<Redirect to="/events" />);
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact={true} render={path} />
          <Route path="/events" exact={true} component={EventContainer} />
          <Route path="/form" exact={true} component={FormContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

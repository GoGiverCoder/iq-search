import { Component } from 'inferno'
import { Provider } from 'inferno-redux';
import store from './services/redux/store'
import { BrowserRouter, Route, Switch } from 'inferno-router'
import AuthCallbackScreen from './modules/auth/AuthCallbackScreen/AuthCallbackScreen'
import SearchScreen from './modules/search/SearchScreen/SearchScreen'
import AddWordScreen from './modules/contribute/AddWordScreen/AddWordScreen'
import './registerServiceWorker'
import './App.css'

class App extends Component {
  render(props, state){
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App"> 
            <Switch>
              <Route exact path="/" component={SearchScreen} />
              <Route path="/callback" component={AuthCallbackScreen} />
              <Route exact path="/contribute/add" component={AddWordScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

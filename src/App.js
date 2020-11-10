import './App.module.css';
import React from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PropTypes from 'prop-types';
import NavigationBar from './navigationBar/NavigationBar';
import users from './data/Users';

class App extends React.Component {

  state = {
    authenticated: false,
    email: '',
    password: ''
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  logInHandle = () => {
    const email = this.state.email;
    const password = this.state.password;
    const match = users.includes((user) => {
      return user.email === email && user.password === password;
    });

    console.log(match);

    this.setState({
      authenticated: true
    });

    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.authenticated ?
            <Router>
              <NavigationBar />
              <Switch>
                <Route exact path="/">
                  <Home className='App' />
                </Route>
              </Switch>
            </Router>
            :
            <Login
              myChangeHandler={this.myChangeHandler}
              logInHandle={this.logInHandle} />
        }
      </React.Fragment>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string
}

export default App;

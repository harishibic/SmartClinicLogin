import React, { Component } from "react";
import Logged from "./components/Logged";
import NotLogged from "./components/NotLogged";
import auth from "./auth/service";

class App extends Component {
  constructor(props) {
    super(props);
//functions to toggle the state to true/false
    auth.loginCallback = this.loggedIn.bind(this);
    auth.logoutCallback = this.loggedOut.bind(this);

    this.state = { loggedIn: false };
  }
//setting state to true when user is logged in
  loggedIn() {
    this.setState({ loggedIn: true });
  }
//setting state to false when user is not logged in
  loggedOut() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div><center>
       
        {this.state.loggedIn ? <Logged /> : <NotLogged />}
        {this.state.loggedIn ? (
          <button onClick={() => auth.logout()} className="log-in">
            Log out
          </button>
        ) : (
          <button onClick={() => auth.login()} className="log-in">
            Log in
          </button>
        )}
      </center></div>
    );
  }
}

export default App;
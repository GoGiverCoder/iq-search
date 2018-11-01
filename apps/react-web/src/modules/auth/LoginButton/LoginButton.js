import { Component } from 'inferno'
import Auth0 from '../../../services/auth/Auth0'

class Auth extends Component
{
  constructor() {
    super();

    this.state = {
      idToken: localStorage.getItem('id_token'),
      profile: JSON.parse(localStorage.getItem('profile'))
    }
  }

  logIn(){
    Auth0.login()
  }

  logOut(){
    Auth0.logout()
  }

  render(){
    return (
      <div className="LoginButton">
        {
          Auth0.isLoggedIn()
            ? <button className="button is-small is-light" onClick={this.logOut}> Log Out</button>
            : <button className="button is-small is-link" onClick={this.logIn}>Log In</button>
        }
      </div>
    )
  }
}

export default Auth;
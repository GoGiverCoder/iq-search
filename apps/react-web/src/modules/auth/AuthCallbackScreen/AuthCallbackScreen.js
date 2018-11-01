import { Component } from 'inferno'
import Header from '../../layout/Header/Header'
import Auth0 from '../../../services/auth/Auth0'

class AuthCallbackScreen extends Component
{
  componentWillMount(){
    Auth0.catchAuthAndSave()
      .then(user => {
        this.context.router.history.push('/')
      })
      .catch(message => {
        alert(message)
        this.context.router.history.push('/')
      })
  }

  render(){
    return (
      <div className="AuthCallbackScreen">
        <Header />
        <div className="main">
          Authenticating ...
        </div>
      </div>
    )
  }
}

export default AuthCallbackScreen
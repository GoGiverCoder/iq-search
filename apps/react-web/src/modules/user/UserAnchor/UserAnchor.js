import { Component } from 'inferno'
import LoginButton from '../../auth/LoginButton/LoginButton'
import Auth0 from '../../../services/auth/Auth0'
import './UserAnchor.css';

class UserAnchor extends Component {
  constructor(){
    super()

    this.state = {
      profile: null
    }
  }

  componentWillMount() {
    let user = Auth0.getUserInfo()
    
    if (user) {
      this.setState({profile: user})
    }
  }

  render(props, state) {
    let profile = state.profile;
    let picture = profile ? profile.picture : null;
    let idp = profile ? profile.sub.split('|')[1] : '###';
    let name = profile ? profile.name : 'Guest';

    return (
      <div className="UserAnchor is-clearfix" title={idp}> 
        <div className="info is-pulled-left">
          <img src={picture} alt=""/> 
          <span>{name}</span> 
        </div>
        <div className="is-pulled-right">
          <LoginButton />
        </div>
      </div>
    );
  }
} 

export default UserAnchor;

import { Component } from 'inferno'
import UserAnchor from '../../user/UserAnchor/UserAnchor'
import CTAContribute from '../../contribute/CTAContribute/CTAContribute'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component
{
  render() {
    return (
      <header className="Header">
        <div className="level">
          <div className="level-item block-left">
            <Logo />
          </div>
          <div className="level-item">
            <CTAContribute />
          </div>
          <div className="level-item block-right">
            <UserAnchor />
          </div>
        </div>
        <progress class="progress is-danger" value="100" max="100">90%</progress>
      </header>
    );
  }
}

export default Header;
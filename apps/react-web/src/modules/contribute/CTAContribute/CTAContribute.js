import {Component} from 'inferno'
import { Link } from 'inferno-router'
import './CTAContribute.css'

class CTAContribute extends Component
{
  render(){
    return(
      <div className="CTAContribute">
        <Link class="button is-medium is-danger is-outlined" to={'/contribute/add'}>
          <span class="icon is-medium">
            <i class="fas fa-pen-alt"></i>
          </span>
        </Link>
      </div>
    )
  }
}

export default CTAContribute
import {Component} from 'inferno'
import {Link} from 'inferno-router'

class Logo extends Component
{
  render(){
    return(
      <div className="Logo">
        <Link className="is-size-5" to={'/'}>IQ Search</Link>
      </div>
    )
  }
}

export default Logo
import {Component} from 'inferno'
import './FormKeyword.css'

class FormKeyword extends Component
{
  render(){
    return(
      <div className="FormKeyword">
        <div class="field">
          <div class="control">
            <input class="input is-large" type="text" placeholder="Primary input" />
          </div>
        </div>
      </div>
    )
  }
}

export default FormKeyword
import {Component} from 'inferno'
import FormTags from '../FormTags/FormTags'
import FormKeyword from '../FormKeyword/FormKeyword'
import './FormItem.css'

class FormItem extends Component 
{
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render(prop, state){
    return (
      <div className="FormItem">
        <div className="form-body">
          <FormKeyword />
          <FormTags />
        </div>
        <div className="form-footer has-text-left">
          <button className="button is-success" type="submit">Submit</button>
          <button className="button" type="reset">Reset</button>
        </div>
      </div>
    )
  }
}

export default FormItem
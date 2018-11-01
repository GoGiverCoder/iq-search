import { Component } from 'inferno'
import './SearchInput.css'

class SearchInput extends Component 
{
  searching = false

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    this.props.onChange(event.target.value)
  }

  render(){
    return (
      <div className="field">
        <div class="control has-text-centered">
          <input class="input is-large" 
            type="text" placeholder="Tìm kiếm" 
            onChange={this.onChange} 
          />
        </div>
      </div>
    )
  }
}

export default SearchInput
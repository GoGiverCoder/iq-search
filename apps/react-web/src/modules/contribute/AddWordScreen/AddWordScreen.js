import {Component} from 'inferno'
import Header from '../../layout/Header/Header'
import FormItem from '../FormItem/FormItem'
import Article from '../Article/Article'
import './AddWordScreen.css'

class AddWordScreen extends Component
{
  render(){
    return(
      <div className="AddWordScreen">
        <Header />
        <div className="main container">
          <div className="columns">
            <div className="column is-one-third main-left">
              <FormItem />
            </div>
            <div className="column">
              <Article />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddWordScreen
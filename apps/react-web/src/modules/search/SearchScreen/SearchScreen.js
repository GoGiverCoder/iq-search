import { Component } from 'inferno'
import Header from '../../layout/Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import GoogleSRP from '../GoogleSRP/GoogleSRP'
import './SearchScreen.css'

// let lastQueryTime = new Date().getTime()
// let delayBetweenSearch = 2*1000 //2s

class SearchScreen extends Component
{
  constructor() {
    super()

    this.state = {
      keyword: ''
    }

    this.onInput = this.onInput.bind(this)
  }

  onInput(text) {
    // let now = new Date().getTime()
    // if (now - lastQueryTime > delayBetweenSearch) {
    this.searchGoogle(text)
  }

  searchGoogle(text){
    this.setState({keyword: text})
    // lastQueryTime = new Date().getTime()
  }
  
  render(props, state){
    return (
      <div className="SearchScreen">
        <Header />
        <div className="main">
          <div className="search-box level">
            <SearchInput onChange={text => this.onInput(text)} />
          </div>
          <div className="level">
            <div className="elastic container level-left">Elastic search</div>
            <div className="google container level-right">
              {
                state.keyword ?
                  <GoogleSRP keyword={state.keyword} />
                  :null
              } 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchScreen
import { Component } from 'inferno'
import SearchApi from '../../../services/api/SearchApi'
import './GoogleSRP.css'

class GoogleSRP extends Component 
{
  constructor(props){
    super(props)

    this.state = {
      webpage: ''
    }
  }

  componentWillMount(){
    this.fetchData(this.props.keyword)  
  }

  componentWillReceiveProps(props){
    this.fetchData(props.keyword)  
  }

  fetchData(keyword){
    if (!keyword) return

    SearchApi.send(keyword).then(
      res => {
        this.setState({webpage: res})
      }
    );
  }

  render(props, state){
    return(
      <div className="GoogleSRP">
        {
          state.webpage ?
            <iframe src={'data:text/html,'+state.webpage} className="iframe" title="GRSP" />
            :null
        }
      </div>
    )
  }
}

export default GoogleSRP
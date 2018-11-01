import {Component} from "inferno"
import DinoApi from '../../../services/api/DinoApi'
import Loading from '../../layout/Loading/Loading'
import "./DinoList.css"

class DinoList extends Component
{
  constructor() {
    super();

    this.state = {
      dinos: [],
    }
  }

  componentDidMount() {
    // GET list of dinosaurs from API
    DinoApi.getDinoList()
      .then(
        res => {
          // Set state with fetched dinos list
          this.setState({
            dinos: res
          });
        },
        error => {
          // An error occurred, set state with error
          this.setState({
            error: error
          });
        }
      );
  }

  render(props, state) {
    return(
      <div class="list">
      { 
        state.dinos 
          ? ( <ul> { state.dinos.map((dino) => ( <li key={dino.id}>{dino.name}</li> )) } </ul> ) 
          : ( <Loading error={state.error} /> ) 
      } 
      </div>
    );
  }
}

export default DinoList;
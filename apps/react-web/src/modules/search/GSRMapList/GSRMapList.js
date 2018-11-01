import {Component} from 'inferno'
import GSRMapItem from '../GSRMapItem/GSRMapItem'

class GSRMapList extends Component
{
  render(props, state){
    return(
      <div class="box">
      {
        props.items.map((item, index) => {
          return (
            <GSRMapItem item={item} key={index} />
          )
        })
      }
      </div>
    )
  }
}

export default GSRMapList
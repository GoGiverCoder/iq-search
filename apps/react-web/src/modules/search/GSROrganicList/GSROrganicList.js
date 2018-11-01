import {Component} from 'inferno'
import GSROrganicItem from '../GSROrganicItem/GSROrganicItem'

class GSROrganicList extends Component
{
  render(props, state){
    return(
      <div class="box">
      {
        props.items.map((item, index) => {
          return (
            <GSROrganicItem item={item} key={index} />
          )
        })
      }
      </div>
    )
  }
}

export default GSROrganicList
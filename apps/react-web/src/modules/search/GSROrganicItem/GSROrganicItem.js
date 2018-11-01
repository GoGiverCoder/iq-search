import {Component} from 'inferno'

class GSROrganicItem extends Component
{
  render(props, state){
    let item = props.item

    return (
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{item.title}</strong> &nbsp; {item.snippet}
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default GSROrganicItem
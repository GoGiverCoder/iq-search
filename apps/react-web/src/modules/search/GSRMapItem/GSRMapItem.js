import {Component} from 'inferno'

class GSRMapItem extends Component
{
  render(props, state){
    let item = props.item

    return (
      <article class="media">
        <div class="media-left">
          {
            item.thumbnail ? 
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
            </figure>
            :null
          }
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{item.title}</strong> &nbsp;
              {item.address} {item.description}
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default GSRMapItem
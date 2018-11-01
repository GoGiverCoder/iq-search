import {Component} from 'inferno'

class GSRWiki extends Component
{
  render(props, state){
    let item = props.item
    return(
      <div class="box">
        <article class="media">
          <div class="media-left">
            {
              item.image ? 
              <figure class="image is-64x64">
                <img src={item.image} alt="Image" />
              </figure>
              :null
            }
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                {item.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default GSRWiki
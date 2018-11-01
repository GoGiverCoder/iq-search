import {Component} from 'inferno'
import SelectableText from '../SelectableText/SelectableText'
import './Article.css'

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Aenean efficitur sit amet massa fringilla egestas. \
Nullam condimentum luctus turpis '

class Article extends Component
{
  constructor(props){
    super(props)

    this.state = {
      data : {
        content: lorem + lorem
      }
    }
  }

  render(prop, state){
    return(
      <div className="Article">
        <div className="box">
          <article className="content has-text-left">
            <SelectableText>
              <p>{state.data.content}</p>
            </SelectableText>
          </article>
        </div>
      </div>
    )
  }
}

export default Article
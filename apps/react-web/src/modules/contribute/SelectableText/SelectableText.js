import {Component} from 'inferno'
import { connect } from 'inferno-redux'
import DOMHelper from '../../../services/utils/DOMHelper'
import * as actions from '../services/redux/actions'
import store from '../../../services/redux/store'
import './SelectableText.css'

class SelectableText extends Component
{
  constructor(props){
    super(props)

    this.state = {
      isSelected: false,
      text: '',
      position: {x: null, y: null}
    }

    this.createTag = this.createTag.bind(this)
  }

  componentDidMount(){
    let eles = document.getElementsByClassName('SelectableText')
    if (eles.length) {
      for(let ele of eles) {
        this.bindEvent(ele)
      }
    }
  }

  bindEvent(ele){
    ele.addEventListener('mouseup', event => {
      if (!DOMHelper.document.getCursorSelectedText().length)
        return 
      
      if (this.state.text === DOMHelper.document.getCursorSelectedText())
        return 

      this.state.text = DOMHelper.document.getCursorSelectedText()
      this.state.position = DOMHelper.document.mousePosition(event, document.getElementsByClassName('hover-actions')[0])
      this.setState({isSelected: true})
    });
  }

  getPopoverStyle(){
    if (this.state.position.x && this.state.position.y) {
      return {
        position: 'absolute',
        left: this.state.position.x - 20, 
        top:  this.state.position.y - 50, 
      }
    }
    
    return {}
  }

  createTag(){
    if (this.state.text.length) {
      this.props.createTagAct(this.state.text)
      // store.dispatch(actions.createTag(this.state.text))
    }
  }

  render(prop, state){
    return(
      <div className="SelectableText">
        {prop.children}
        <div className="hover-actions">
          {
            state.isSelected && state.text.length ? 
              <button className="button is-warning" style={this.getPopoverStyle()} onClick={this.createTag}>
                <span class="icon is-medium"><i class="fas fa-plus"></i></span>
              </button>
              :null
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTagAct: text => { dispatch(actions.createTag(text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectableText)
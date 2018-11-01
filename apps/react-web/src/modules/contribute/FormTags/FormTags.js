import { Component } from 'inferno'
import { connect } from 'inferno-redux'
import * as actions from '../services/redux/actions'
import './FormTags.css'

class FormTags extends Component 
{

  _clickRemove(event){
    this.props.removeTagAct(parseInt(event.target.dataset.index))
  }

  _clickAdd(){
    let input = document.getElementById('input_manual_tag')
    this.props.createTagAct(input.value)
    input.value = ''
  }

  _pressAdd(key){
    if (key.code === 'Enter') {
      this._clickAdd()
    }
  }

  _tag(label, index){
    return (
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-medium is-rounded">
            <input class="input tag-input" type="text" defaultValue={label} />
          </span>
          <button class="tag is-delete" data-index={index} onClick={e => {this._clickRemove(e)}}></button>
        </div>
      </div>
    )
  }

  _manualTag(){
    return (
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-medium is-rounded">
            <input 
              class="input tag-input" id="input_manual_tag" 
              type="text" placeholder="Gõ hoặc chọn từ bài viết" 
              onKeyPress={key => this._pressAdd(key)}
            />
          </span>
          <button class="tag __icon is-medium is-primary" onClick={e => this._clickAdd()} >Enter</button>
        </div>
      </div>
    )
  }

  render(prop, state){
    return (
      <div className="FormTags">
        <div class="field is-grouped is-grouped-multiline">
            {
              prop.tags.map((item, index) => {
                return this._tag(item, index)
              })
            }
        </div>
        <div class="_footer">{ this._manualTag() }</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    tags: state.contribute.form.tags
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeTagAct: index => { dispatch(actions.removeTag(index)) },
    createTagAct: text => { dispatch(actions.createTag(text)) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormTags)
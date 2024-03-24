import {Component} from 'react'
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai'

import {Edit, Icon} from './components/styles'
import './App.css'

// Replace your code here
class App extends Component {
  state = {bold: false, italic: false, underline: false}

  onBold = () => {
    this.setState(old => ({bold: !old.bold}))
  }

  onItalic = () => {
    this.setState(old => ({italic: !old.italic}))
  }

  onUnderline = () => {
    this.setState(old => ({underline: !old.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="head-img">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="img"
            />
          </div>
          <div className="edit-cont">
            <ul className="icons">
              <li>
                <Icon
                  data-testid="bold"
                  onClick={this.onBold}
                  type="button"
                  val={bold}
                >
                  <AiOutlineBold />
                </Icon>
              </li>
              <li>
                <Icon
                  data-testid="italic"
                  onClick={this.onItalic}
                  type="button"
                  val={italic}
                >
                  <AiOutlineItalic />
                </Icon>
              </li>
              <li>
                <Icon
                  data-testid="underline"
                  val={underline}
                  onClick={this.onUnderline}
                  type="button"
                >
                  <AiOutlineUnderline />
                </Icon>
              </li>
            </ul>
            <hr />
            <Edit bold={bold} underline={underline} italic={italic} />
          </div>
        </div>
      </div>
    )
  }
}
export default App

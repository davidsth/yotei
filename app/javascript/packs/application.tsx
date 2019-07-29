import * as ReactDOM from 'react-dom'
import * as React from 'react'

const App = props => {
  return <div>
    Hello {props.name}
    </div>
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

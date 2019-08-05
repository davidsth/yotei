import * as ReactDOM from 'react-dom'
import * as React from 'react'

const App = props => {
  return <div>
    Hello {props.name}
  </div>
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React"/>,
    document.body.appendChild(document.createElement('div')),
  )

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope)
      }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error)
    })
  }
})

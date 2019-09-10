import * as ReactDOM from 'react-dom'
import * as React from 'react'
import App from 'src/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

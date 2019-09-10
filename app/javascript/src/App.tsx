import * as React from 'react'
import {IndexPage} from 'src/pages/IndexPage'
import {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import {ShowPage} from 'src/pages/ShowPage'

class App extends Component {
  state = {
    trips: {
      1: {
        _id: 1,
        title: 'Japan',
        details: [
          {
            _id: 1,
            date: new Date(2019, 1, 1),
            notes: 'Places to visit for the day'
          },
          {
            _id: 2,
            date: new Date(2019, 1, 2),
            notes: 'Second day'
          }

        ]
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={(props) => <IndexPage {...props} trips={this.state.trips}/>} />
          <Route exact path="/trip/:id" component={(props) => <ShowPage trip={this.state.trips[props.match.params.id]} {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
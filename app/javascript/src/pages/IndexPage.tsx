import * as React from 'react'
import {Link} from 'react-router-dom'

export const IndexPage = (props) => {
  const trips = Object.values(props.trips)
  console.log(trips)

  return (
    <div>
      <h1>Trips</h1>
      <hr/>
      {trips.map((trip: {_id: number, title: string}) => <div key={trip._id}>
        <Link to={`trip/${trip._id}`}
        ><h2>{trip.title}</h2></Link>
      </div>)}
    </div>
  )
}

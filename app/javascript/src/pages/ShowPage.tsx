import * as React from 'react'

export const ShowPage = (props) => {
  const {trip} = props
  console.log(trip.details);
  return <div>
    <div><h2>{trip.title}</h2></div>
    <br />
    {trip.details.map(detail => {
      return <div key={detail._id}>
        <span>{detail.date.toDateString()}</span> <span>{detail.notes}</span>
      </div>
    })}
  </div>
}
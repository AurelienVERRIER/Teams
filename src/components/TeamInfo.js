import React from 'react'
import Teams from './Teams.json'

class TeamInfo extends React.Component {
  render() {
     
  return (
      <section className="info">
        <h1>{this.props.shortName}</h1>
        <img src={this.props.logo} alt="Team_Logo" />
        <p>Stadium: {this.props.stadium}</p>
        <p>Address: {this.props.address}</p>
        <p>Email: {this.props.email}</p>
        <p>Phone: {this.props.phone}</p>
        <p>Created in {this.props.birth}</p>
      </section>
  )

}}

export default TeamInfo
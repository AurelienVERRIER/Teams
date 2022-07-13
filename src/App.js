import React from 'react';
import Teams from './Teams.json'
import TeamInfo from './components/TeamInfo';
import './App.css';

class App extends React.Component {
  render() {

  return (
    <>
      {Teams.map(team => {
        return (
          <section className="info">
            <h1>{team.shortName}</h1>
            <img src={team.crestUrl} alt="Team_Logo" />
            <p>Stadium: {team.venue}</p>
            <p>Address: {team.address}</p>
            <p>Email: {team.email}</p>
            <p>Phone: {team.phone}</p>
            <p>Created in {team.founded}</p>
          </section>
        )
      })}
    </>
  )

}}

export default App;

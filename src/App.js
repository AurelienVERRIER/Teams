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
            <p>{team.shortName}</p>
            <p>{team.crestUrl}</p>
            <p>{team.venue}</p>
            <p>{team.address}</p>
            <p>{team.email}</p>
            <p>{team.phone}</p>
            <p>{team.founded}</p>
          </section>
        )
      })}
    </>
  )

}}

export default App;

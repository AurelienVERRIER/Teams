import React from 'react';
import TeamInfo from './components/TeamInfo.js'
import Teams from './components/Teams.json'
import Counter from './components/Counter.js'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 10
    }
  }

  handleButtonClickSubstract = () => {  
    if (this.state.count>1) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  handleButtonClickIncrease = () => {
    if (this.state.count<Teams.length-1) {
      this.setState({ count: this.state.count + 1 })
    }
  }



  render() {

  return (
    <>
      <h1>Number of displayed teams</h1>
      
      <Counter
        count = {this.state.count}
        substract = {this.handleButtonClickSubstract}
        increase = {this.handleButtonClickIncrease}
      />

  
      <section className="info">
        {Teams.map(team => {
          return (
            <TeamInfo
              shortName = {team.shortName}
              logo = {team.crestUrl}
              stadium = {team.venue}
              address = {team.address}
              email = {team.email}
              phone = {team.phone}
              birth = {team.founded}
            />
          )
          })
        }
      </section>
    </>
  )

}}

export default App;

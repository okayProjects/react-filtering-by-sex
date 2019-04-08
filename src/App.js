import React, { Component } from 'react';
import './App.css';
import User from './Users';

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: 'Arek',
      sex: 'male'
    },
    {
      id: 2,
      age: 49,
      name: 'Marta',
      sex: 'female'
    },
    {
      id: 3,
      age: 19,
      name: 'Kasia',
      sex: 'female'
    },
    {
      id: 4,
      age: 32,
      name: 'Tomiek',
      sex: 'male'
    }
  ]
}


class App extends Component {

  state = {
    select: 'all'
  }

  usersList = () => {
    let users = data.users;

    switch (this.state.select) {

      case 'all': return users.map(user => <User key={user.id} user={user} />)

      case 'female': users = users.filter(user => user.sex === 'female');
        return users.map(user => <User key={user.id} user={user} />)

      case 'male': users = users.filter(user => user.sex === 'male');
        return users.map(user => <User key={user.id} user={user} />)
    }
  }

  selectHandler(option) {
    this.setState({
      select: option
    })
  }

  render() {


    return (
      <div className="App">
        <div>
          <button onClick={this.selectHandler.bind(this, 'all')}>Wszyscy</button>
          <button onClick={this.selectHandler.bind(this, 'female')}>Kobiety</button>
          <button onClick={this.selectHandler.bind(this, 'male')}>Mężczyźni</button>
          {this.usersList()}
        </div>
      </div>
    );
  }
}

export default App;

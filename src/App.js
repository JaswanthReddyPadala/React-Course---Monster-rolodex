import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search-box/search.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this); - if handleChange is not a arrow function we need to define like this to bind this scope of handleChange to constructor and make available for further use when needed.
  }
  
  componentDidMount(){ //componentDidMount is used when we fetch something and render content for the first time

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //converting object to json
    .then(users => this.setState({monsters:users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const  {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()
      ));
 
    return (
    <div className="App backgrounding">
      <h1>Monsters-rolodex</h1>
      <Search
      placeholder='search monsters' 
      handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} />
      
      {/* <CardList >{this.state.monsters.map(monster => (
        <h1 key={monster.id}>{ monster.name} </h1>
      ))}</CardList> */}
      
    </div>
  );
}
}

export default App;

import "./App.css";
import { Component } from "react";
import { CardList } from "./card-list.component/card-list.component";
import { SearchBox } from "./searchfield.component/searchfield.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, SearchField } = this.state;
    const filteredmonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="header">Monsters Rolodex</h1>
        <SearchBox
          placeholder={"Enter A Name"}
          handleChange={(e) => {
            this.setState({ SearchField: e.target.value });
          }}
        />
        <CardList key="ac1" monsters={filteredmonsters} />
        <h3 className="copy">Made By Rashid &copy;</h3>
      </div>
    );
  }
}

export default App;

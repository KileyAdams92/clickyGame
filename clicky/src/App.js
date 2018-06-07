import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard/CharacterCard";
import Wrapper from "./Components/Wrapper/Wrapper";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  };

  //rotates images when images are clicked
  rotateCharacters = () => {};

  //renders images with onClick method
  render() {
    return (
      <Wrapper>
        <div className="App">
          {this.state.characters.map(character => (
            <CharacterCard
              name={CharacterCard.name}
              image={CharacterCard.image}
            />
          ))}

          <a onClick={() => this.rotateCharacters()}>{CharacterCard}</a>
        </div>
      </Wrapper>
    );
  }
}

export default App;

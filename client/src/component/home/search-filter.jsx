import React, { Component } from "react";
import axios from "axios";
export default class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      searchSuggestions: []
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleStateChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value }, this.handleNameChange);
  }
  handleNameChange() {
    let { name = "" } = this.state;
    if (name !== undefined && name !== "" && name.trim().length >= 2) {
      axios
        .get(`http://localhost:7000/api/contacts/name/${name}`)
        .then(response => {
          let searchSuggestions = response.data;
          this.setState({ searchSuggestions });
        });
    } else {
      this.setState({ searchSuggestions: [] });
    }
  }
  render() {
    let { searchSuggestions } = this.state;
    return (
      <div className="container">
        <input
          name="name"
          placeholder="Type name of contact ..."
          onChange={this.handleStateChange}
        />
        {searchSuggestions.map(contact => {
          return (
            <ul>
              <li>{contact.name}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

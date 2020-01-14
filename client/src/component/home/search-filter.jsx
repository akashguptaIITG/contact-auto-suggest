import React, { Component } from "react";
import axios from "axios";
import { API_PATH } from "../../lib/constant";

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
      axios.get(API_PATH.GET_CONTACTS_BY_NAME(name)).then(response => {
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
      <div className="search-filter">
        <div className="md-form">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Type name of contact ..."
            onChange={this.handleStateChange}
          />
          <div>
            {searchSuggestions.map(contact => {
              return (
                <ul>
                  <li>{contact.name}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

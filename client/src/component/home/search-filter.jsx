import React, { Component } from "react";
import axios from "axios";
import { API_PATH } from "../../lib/constant";
import "../../style/search-filter.scss";
import { Redirect } from "react-router-dom";
export default class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      searchSuggestions: [],
      redirect: false
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  handleStateChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value }, this.handleNameChange);
  }
  handleSearchClick() {
    let { name = "" } = this.state;
    if (name !== undefined && name !== "" && name.trim().length >= 2) {
      this.setState({ redirect: true });
    }
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
  renderRedirect = () => {
    let { name } = this.state;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{ pathname: "/contact-search", search: `?name=${name}` }}
        />
      );
    }
  };
  render() {
    let { searchSuggestions } = this.state;
    return (
      <div className="search-filter">
        {this.renderRedirect()}
        <div className="input-group">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Type name of contact ..."
            onChange={this.handleStateChange}
          />
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleSearchClick}
          >
            search
          </button>
        </div>
        <div className="card" hidden={searchSuggestions.length ? false : true}>
          {searchSuggestions.map((contact, index) => {
            return (
              <ul key={index}>
                <li>{contact.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

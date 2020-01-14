import React, { Component } from "react";
import ContactList from "./contact-list.jsx";
import axios from "axios";

export default class ContactSearchResult extends Component {
  constructor() {
    super();
    this.state = {
      contactSearchResults: []
    };
  }
  componentDidMount() {
    // this.props.location.search;
  }
  render() {
    let { contactSearchResults } = this.state;
    return (
      <div>
        <ContactList contacts={contactSearchResults} />
      </div>
    );
  }
}

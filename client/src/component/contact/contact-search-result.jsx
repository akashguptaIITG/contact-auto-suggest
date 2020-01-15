import React, { Component } from "react";
import ContactList from "./contact-list.jsx";
import axios from "axios";
import queryString from "query-string";
import { API_PATH } from "../../lib/constant";

export default class ContactSearchResult extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let queryParams = queryString.parse(this.props.location.search);
    let url = API_PATH.GET_CONTACTS_BY_NAME(queryParams.name);
    this.props.getContactsByName({ url });
  }
  render() {
    let { contactSearchResults, isLoading } = this.props;
    if (isLoading) {
      return <img src="loader.svg" alt="lodaing..." className="loader" />;
    }
    if (contactSearchResults.length === 0 && !isLoading) {
      return <h4>No contacts Found</h4>;
    }
    return (
      <div className="container">
        <h2>Search Results: </h2>
        <ContactList contacts={contactSearchResults} />
      </div>
    );
  }
}

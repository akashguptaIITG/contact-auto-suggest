import React, { Component } from "react";
import SearchFilter from "./search-filter.jsx";
import ContactList from "../contact/contact-list.jsx";
import { API_PATH } from "../../lib/constant";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let url = API_PATH.GET_CONTACTS_ALL();
    this.props.getContactsAll({ url });
  }
  render() {
    let { contactsAll, isLoading, searchSuggestions,getContactsByName } = this.props;
    if (isLoading) {
      return <img src="loader.svg" alt="lodaing..." className="loader" />;
    }
    return (
      <div className="container">
        <SearchFilter searchSuggestions={searchSuggestions} getContactsByName={getContactsByName} />
        <ContactList contacts={contactsAll} />
      </div>
    );
  }
}

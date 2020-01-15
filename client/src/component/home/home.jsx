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
    let { contactsAll } = this.props;
    return (
      <div className="container">
        <SearchFilter />
        <ContactList contacts={contactsAll} />
      </div>
    );
  }
}

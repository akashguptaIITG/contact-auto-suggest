import React, { Component } from "react";
import SearchFilter from "./search-filter.jsx";
import ContactList from "../contact/contact-list.jsx";
import axios from "axios";
import {API_PATH} from "../../lib/constant";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get(API_)
      .then(res => {
        this.setState({ contacts: res.data });
      })
      .catch(err => {
        this.setState({ contacts: [] });
      });
  }
  render() {
    let { contacts } = this.state;
    return (
      <div className="container">
        <SearchFilter />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

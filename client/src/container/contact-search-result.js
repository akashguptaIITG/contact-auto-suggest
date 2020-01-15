import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ContactSearchResult from "../component/contact/contact-search-result.jsx";
import { getContactsByName } from "../redux/action/action";

const mapStateToProps = state => {
  let { isLoadingContactsByName, contactsByName } = state.contact;

  return {
    isLoading: isLoadingContactsByName,
    searchSuggestions: contactsByName
  };
};

const mapDispatchToProps = dispatch => ({
  getContactsByName: reqData => dispatch(getContactsByName.request(reqData))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactSearchResult)
);

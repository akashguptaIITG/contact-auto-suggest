import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../component/home/home.jsx";
import { getContactsAll,getContactsByName } from "../redux/action/action";

const mapStateToProps = state => {
  let { isLoadingContactsAll, contactsAll,isLoadingContactsByName,contactsByName } = state.contact;

  return {
    isLoading: isLoadingContactsAll,
    contactsAll,
    searchSuggestions:contactsByName
  };
};

const mapDispatchToProps = dispatch => ({
  getContactsAll: reqData => dispatch(getContactsAll.request(reqData)),
  getContactsByName:reqData=>dispatch(getContactsByName.request(reqData))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

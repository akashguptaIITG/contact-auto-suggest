import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../component/home/home.jsx";
import { getContactsAll } from "../redux/action/action";

const mapStateToProps = state => {
  let { isLoadingContactsAll, contactsAll } = state.contact;

  return {
    isLoading: isLoadingContactsAll,
    contactsAll
  };
};

const mapDispatchToProps = dispatch => ({
  getContactsAll: reqData => dispatch(getContactsAll.request(reqData))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

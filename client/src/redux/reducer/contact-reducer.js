import { GET_CONTACTS_BY_NAME, GET_CONTACTS_ALL } from "../action/action-type";

const initialState = {
  isLoadingContactsByName: false,
  isLoadingContactsAll: false,
  contactsByName: [],
  contactsAll: [],
  error: {}
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_BY_NAME.LOADING:
      return Object.assign({}, ...[state], { isLoadingContactsByName: true });
    case GET_CONTACTS_BY_NAME.SUCCESS:
      return Object.assign({}, ...[state], {
        isLoadingContactsByName: false,
        contactsByName: action.resData
      });
    case GET_CONTACTS_BY_NAME.FAILURE:
      return Object.assign({}, ...[state], {
        isLoadingContactsByName: false,
        error: action.error
      });
    case GET_CONTACTS_ALL.LOADING:
      return Object.assign({}, ...[state], { isLoadingContactsAll: true });
    case GET_CONTACTS_ALL.SUCCESS:
      return Object.assign({}, ...[state], {
        isLoadingContactsAll: false,
        contactsAll: action.resData
      });
    case GET_CONTACTS_ALL.FAILURE:
      return Object.assign({}, ...[state], {
        isLoadingContactsAll: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default contactReducer;

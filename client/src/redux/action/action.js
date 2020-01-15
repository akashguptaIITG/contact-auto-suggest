import { actionCreator } from "../../lib/helper";
import * as actionType from "./action-type";
export const getContactsByName = actionCreator(actionType.GET_CONTACTS_BY_NAME);
export const getContactsAll = actionCreator(actionType.GET_CONTACTS_ALL);

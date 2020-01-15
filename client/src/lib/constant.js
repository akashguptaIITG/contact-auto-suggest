export const BASE_API_URL = process.env.REACT_APP_API_URL;
export const API_PATH = {
  GET_CONTACTS_BY_NAME: name => `/contacts/name/${name}`,
  GET_CONTACTS_ALL: () => `/contacts/all`
};

export const MAX_CLUSTER_APPS_SIZE = 5;

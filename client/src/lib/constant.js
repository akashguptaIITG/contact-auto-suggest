export const BASE_API_URL = process.env.REACT_APP_API_URL;
export const API_PATH = {
  GET_CONTACT_BY_NAME: name => `${BASE_API_URL}/contacts/name/${name}`,
  GET_ALL_CONTACTS: () => `${BASE_API_URL}/contacts/all`
};

export const MAX_CLUSTER_APPS_SIZE = 5;

import {
  SET_PAGE_INDEX,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  pageIndex: 0,
  items: [],
};
const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_PENDING: // gerer l'état en chargement
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS: // gerer l'état en cas de succés
      return {
        ...state,
        isLoading: false,
        items: payload.data,
      };
    case GET_PRODUCTS_FAILURE: // gerer l'état en cas de problème
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case SET_PAGE_INDEX: // segmenter en faisant une pagination
      return {
        ...state,
        pageIndex: payload.index,
      };
    default:
      return state;
  }
};
export default products;

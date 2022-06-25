import { FETCH_POSTS, LOADING, ERROR } from "../constants/actionTypes";

const postsReducer = (
  state = {
    posts: { prev: {}, result: [], next: {} },
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: {
          prev: action.payload.prev,
          result: action.payload.result,
          next: action.payload.next,
        },
        loading: false,
        error: false,
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, posts: {}, loading: false, error: true };
    default:
      return state;
  }
};

export default postsReducer;

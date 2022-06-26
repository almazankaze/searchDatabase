import { FETCH_POSTS, LOADING, ERROR } from "../constants/actionTypes";

const postsReducer = (
  state = {
    posts: { pages: 0, result: [], page: 1 },
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
          pages: action.payload.pages,
          result: action.payload.result,
          page: action.payload.page,
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

import { FETCH_POSTS, LOADING, ERROR } from "../constants/actionTypes";

import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getPage = (page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchPage(page);

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

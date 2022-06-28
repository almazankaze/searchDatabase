import {
  FETCH_POSTS,
  FETCH_POSTS_BY_SEARCH,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

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
    if (page === null) page = 1;

    dispatch({ type: LOADING });
    const { data } = await api.fetchPage(page);

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

export const getPostsBySearch = (searchQuery, page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.fetchPostsBySearch(searchQuery, page);

    dispatch({ type: FETCH_POSTS_BY_SEARCH, payload: data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

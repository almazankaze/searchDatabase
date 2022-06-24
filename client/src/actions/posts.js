import { FETCH_POSTS } from "../constants/actionTypes";

import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (e) {
    console.log("could not get POSTS");
  }
};

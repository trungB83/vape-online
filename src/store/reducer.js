import { TYPES } from "store";

const initState = {
  users: {
    list: [],
    item: {},
    current: {},
  },
  posts: {
    list: [],
    item: {},
  },
  postCates: {
    list: [],
    item: {},
  },
  products: {
    list: [],
    item: {},
  },
  productCates: {
    list: [],
    item: {},
  },
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.GET_POST:
      return { ...state, posts: { ...state.posts, item: action.payload.data } };
    case TYPES.GET_POSTS:
      return { ...state, posts: { ...state.posts, list: action.payload.data } };
    case TYPES.GET_POST_CATEGORY:
      return {
        ...state,
        postCates: { ...state.postCates, item: action.payload.data },
      };
    case TYPES.GET_POST_CATEGORIES:
      return {
        ...state,
        postCates: { ...state.postCates, list: action.payload.data },
      };
    default:
      break;
  }
}
export { initState };
export default reducer;

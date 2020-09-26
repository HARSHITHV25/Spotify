export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
  term: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_PLAYING: "SET_PLAYING",
  SET_ITEM: "SET_ITEM",
  SET_TERM: "SET_TERM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;

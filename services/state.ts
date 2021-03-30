import produce from "immer";
import { addHero, deleteHero } from "./storage";

export const initialState = {
  list: [],
  filtered: [],
  favHeros: [],
  query: "",
  orderBy: "",
  orderState: false,
};

const TYPES = {
  SET_LIST: "SET_LIST",
  SET_QUERY: "SET_QUERY",
  SET_FILTERED: "SET_FILTERED",
  SET_FAV_HEROS: "SET_FAV_HEROS",
  UPDATE_FAV_HEROS: "UPDATE_FAV_HEROS",
  UNSET_FAV_HEROS: "UNSET_FAV_HEROS",
  TOGGLE_ORDER: "TOGGLE_ORDER",
};

export const setToggleOrder = () => ({ type: TYPES.TOGGLE_ORDER });
export const setList = (payload) => ({ type: TYPES.SET_LIST, payload });
export const setQuery = (payload) => ({ type: TYPES.SET_QUERY, payload });
export const setFiltered = (payload) => ({ type: TYPES.SET_FILTERED, payload });
export const setFavHeros = (payload) => ({
  type: TYPES.SET_FAV_HEROS,
  payload,
});
export const unsetFavHeros = (payload) => {
  return {
    type: TYPES.UNSET_FAV_HEROS,
    payload,
  };
};

export const updateFavHeros = (payload) => {
  return {
    type: TYPES.UPDATE_FAV_HEROS,
    payload,
  };
};

export const appReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LIST: {
      draft.list = payload;
      break;
    }
    case TYPES.SET_FILTERED: {
      draft.filtered = payload;
      break;
    }
    case TYPES.SET_QUERY: {
      draft.query = payload;
      break;
    }
    case TYPES.UPDATE_FAV_HEROS: {
      if (draft.favHeros.length > 4) {
        break;
      }
      addHero(payload);
      draft.favHeros.push(payload);
      break;
    }
    case TYPES.UNSET_FAV_HEROS: {
      deleteHero(payload);
      const i = draft.favHeros.indexOf(payload);
      draft.favHeros.splice(i, 1);
      break;
    }
    case TYPES.SET_FAV_HEROS: {
      draft.favHeros = payload;
      break;
    }
    case TYPES.TOGGLE_ORDER: {
      draft.orderState = !draft.orderState;
      break;
    }
  }
}, initialState);

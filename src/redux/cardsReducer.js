import shortid from "shortid";
import { strContains } from "../utils/strContains";

export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFavoriteCard = (state) => state.cards.filter(card => card.isFavorite ===true);

const createActionName = actionName => `app/cards/${actionName}`;

const ADD_CARD = createActionName('ADD_CARD');
export const addCard = payload => ({ type: ADD_CARD, payload });

const IS_FAVORITE = createActionName('IS_FAVORITE');
export const favorite = payload => ({ type: IS_FAVORITE, payload });

const DELETE_CARD = createActionName('DELETE_CARD');
export const deleteCard = payload => ({ type: DELETE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case IS_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case DELETE_CARD:
        const newState = statePart.filter(card => card.id  !== action.payload);
        return newState;
    default:
      return statePart;
  }
}

export default cardsReducer;
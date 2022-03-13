import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({columns}, columnListId) => columns.filter(column => column.listId === columnListId);

export const getAllLists = (state) => state.lists;

export const getFavoriteCard = (state) => state.cards.filter(card => card.isFavorite ===true);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addSearch = payload => ({ type: 'SEARCH_CARD', payload });
export const addList = payload => ({type: 'ADD_LIST', payload});
export const favorite = payload => ({type: 'IS_FAVORITE', payload})

const reducer = (state, action) => {

  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
    case 'SEARCH_CARD':
      return { ...state, searchString: action.payload };
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]};
    case 'IS_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default:
      return state;
  }  
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
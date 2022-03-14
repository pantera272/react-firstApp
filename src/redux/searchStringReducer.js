const createActionName = actionName => `app/searchString/${actionName}`;
const SEARCH_CARD = createActionName('SEARCH_CARD');

export const addSearch = payload => ({ type: SEARCH_CARD, payload });


const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH_CARD:
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer
const favoriteInitialState = [];

export const favoriteReducer = (state = favoriteInitialState, action) => {
  switch (action.type) {
    case 'favorite/addFavorite':
      return [...state, action.payload];
    case 'favorite/deleteFavorite':
      return state.filter(favorite => favorite !== action.payload);
    default:
      return state;
  }
};

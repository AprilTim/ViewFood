const ADD_INGREDIENT = 'ADD_INGREDIENT';
const EDIT_INGREDIENT = 'EDIT_INGREDIENT';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

const initialState = {
  ingredients: [
    {
      id: 0,
      name: 'Яблоко',
      protein: '0.4',
      carbohydrate: '9.8',
      fat: '0.4',
      weight: 100,
    },
    {
      id: 1,
      name: 'Апельсин',
      protein: '4',
      carbohydrate: '11',
      fat: '2',
      weight: 100,
    },
  ],
  dish: [],
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = {
        id: state.ingredients.length,
        name: '',
        protein: '',
        carbohydrate: '',
        fat: '',
        weight: 100,
      };
      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };
    case EDIT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(item =>
          action.payload.id === item.id ? action.payload : item,
        ),
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addFood = () => ({ type: ADD_INGREDIENT });
export const editFood = ingredient => ({ type: EDIT_INGREDIENT, payload: ingredient });
export const deleteIngredient = id => ({ type: DELETE_INGREDIENT, payload: id });

export default calcReducer;

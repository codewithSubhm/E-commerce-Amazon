export const initialState = {
    basket: [],
    user: null,
  };
  
  //selector
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      case "REMOVE_FROM_BASKET":
        //this method will remove all the product of same id from the basket
        //exp u have 3 books and want to remove 1 book then this will not help u
        //as it will remove all 3 books
  
        /* return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.id),
        }; */
  
        //correct method
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its in not in basket`
          );
        }
        return {
          ...state,
          basket: newBasket,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "EMPTY_BASKET":
        return { ...state, basket: [] };
  
      default:
        return state;
    }
  };
  
  export default reducer;
export const initialState = {
    basket: [],
    user: null,
};

//selector
export const getBasketTotal = (basket: any[]) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state: { basket: any[]; }, action: { type: any; item: any; id: any; user: any; }) => {
    switch (action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            case "EMPTY_BASKET" :
                return{
                    ...state,
                    basket: []
                }

            case 'REMOVE_FROM_LIST':
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id 
                );
                let newBasket = [...state.basket];

                if (index >= 0){
                    newBasket.splice(index, 1);
                    console.log(state.basket)
                }

                    else{
                        console.warn("oops no item found in the basket sir")
                    }

                    return{
                        ...state,
                        basket: newBasket
                }

                case 'SET_USER':
                    return{
                        ...state,
                        user: action.user
                    }
            default:
                return state;
    }
};

export default reducer;
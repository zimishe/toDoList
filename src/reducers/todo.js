/**
 * Created by eugene on 20.02.17.
 */
import initialState from './../initialState'
import store from './../store.js'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADDED_ITEM' : return {
            // addedItems: store.getState().addedItems + 1
            
        };
        
        default : return state
    }
};

export default reducer
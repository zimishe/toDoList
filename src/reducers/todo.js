/**
 * Created by eugene on 20.02.17.
 */
import initialState from './../initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADDED_ITEM' : return {
            addedItems: action.addedItems
        };
        case 'REMOVED_ITEM' : return {
            addedItems: action.addedItems
        };
        
        default : return state
    }
};

export default reducer
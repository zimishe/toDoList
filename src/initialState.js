/**
 * Created by eugene on 20.02.17.
 */

let storageState = localStorage.getItem('todoItems'),
    addedItems;

console.log('strg', storageState);

storageState === null ? addedItems = [] : addedItems = JSON.parse(storageState);

const initialState = {
  addedItems : addedItems  
};

export default initialState;
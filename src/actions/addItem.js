/**
 * Created by eugene on 20.02.17.
 */

export function addItem(addedItems) {
    return {
        type: 'ADDED_ITEM', addedItems: addedItems
    }
}

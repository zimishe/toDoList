/**
 * Created by eugene on 21.02.17.
 */
export function removeItem(addedItems) {
    return {
        type: 'REMOVED_ITEM', addedItems: addedItems
    }
}
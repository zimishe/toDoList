/**
 * Created by eugene on 20.02.17.
 */

export function addItem(textValue) {
    return {
        type: 'ADDED_ITEM', text: textValue
    }
}

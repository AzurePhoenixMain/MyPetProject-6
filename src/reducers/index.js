const initialState = {
    menu: [],
    loading: true,
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUSTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'ITEM_ADD_TO_CART': 
            const id = action.payload
            const item = state.menu.find(item => item.id === id)
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                counter: ++item.counter
            }

            if (state.items.filter(item => item.id === id).length !== 0) {
                const index = state.items.findIndex(item => item.id === id)

                const oldItem = state.items.filter(item => item.id === id)[0]
                const newItem = {...oldItem, counter: ++oldItem.counter}

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index), newItem,
                        ...state.items.slice(index + 1)
                    ]
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };
            }

        case "ITEM_REMOVE_FROM_CART":
            const index = action.payload
            const itemIndex = state.items.findIndex(item => item.id === index)
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]

            }
        default: return state;
    }
}

export default reducer

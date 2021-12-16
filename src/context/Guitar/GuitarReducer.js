// ./client/src/context/GuitarReducer.js

const reducer = (globalState, action) => {
    switch (action.type) {
        case 'GET_GUITAR':
        case 'UPDATE_GUITAR':
            return {
                ...globalState,
                singleGuitar: action.payload,
            };

        case 'GET_GUITARS':
            return {
                ...globalState,
                guitars: action.payload,
            };

        case 'CHANGE_TEXT':
            return {
                ...globalState,
                hola: action.payload,
            };

        default:
            return globalState;
    }
};

export default reducer;


const usersReducer = ( state=[], action) => {

    switch(action.type){

        case 'INITIALIZE':
            return action.payload;

        case 'ADD_USER':
            return [...state, action.payload];

        case 'DELETE_USER':
            return state.filter( item => item.id !== action.payload );

        case 'UPDATE_USER':
            return state.map( item => item.id === action.payload.id ? action.payload : item);

        default:
            return state;

    }
};

export default usersReducer;


let initial={
  page: 1,
  all: true,
  active: true,
}

const filtersReducer = (state = initial, action) => {

    switch(action.type){
      
      case 'NEW_FILTER':
        return action.payload;

      default:
        return state;
    }
  
};
export default filtersReducer;
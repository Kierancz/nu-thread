const filter = (state = 'SHOW_ALL', action) => {
  console.log('in filter reducer!');
  switch(action.type) {
    case 'SET_FILTER':
      console.log('SET_FILTER, action.filter: ', action.filter);
      return action.filter;
    default:
      return state;
  }
}

export default filter;
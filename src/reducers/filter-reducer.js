const FILTER_TYPE = 'FILTER_TYPE'
const filterType = (state = 'normal', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.type;
    default:
      return state;
  }
};

export default filterType;

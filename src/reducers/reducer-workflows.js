export default (state = [], action) => {
  switch (action.type) {
    case 'data_workflows': {
      return {
        ...state,
        list: action.data,
      }
    }
    default:
      return state
  }
}

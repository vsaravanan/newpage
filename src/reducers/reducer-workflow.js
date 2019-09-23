export default (state = {}, action) => {
  switch (action.type) {
    case 'workflow': {
      return {
        ...state,
        current: action.data,
      }
    }
    default:
      return state
  }
}

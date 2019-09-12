const INIT = {
  show: false,
}

export default (state = INIT, action) => {
  switch (action.type) {
    case 'sidebar': {
      return {
        ...state,
        show: !state.show,
      }
    }
    default:
      return state
  }
}

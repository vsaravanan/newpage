const INIT = {
  show: false,
}

const reducersidebar = (state = INIT, action) => {
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
export default reducersidebar

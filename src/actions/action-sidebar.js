export const action_sidebar_toggle = () => dispatch => {
  dispatch({
    type: 'sidebar',
    show: null,
  })
}

export const sleep = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

export const action_close_sidebar = () => async dispatch => {
  await sleep(10)
  dispatch({
    type: 'sidebar',
    show: null,
  })
}

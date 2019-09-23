export const action_workflow = workflow => dispatch => {
  dispatch({
    type: 'workflow',
    data: workflow,
  })
}

export const action_current_workflow = () => current_workflow => {
  return {
    type: 'workflow',
    data: current_workflow,
  }
}

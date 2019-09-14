import axios from 'axios'

const fetchMenus = () => dispatch => {
  axios
    .get(process.env.react_app_path_statichtmls)
    .then(res => {
      dispatch({
        type: 'data_menus',
        data: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: 'data_menus',
        data: {},
      })
    })
}

export { fetchMenus }

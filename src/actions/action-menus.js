import axios from 'axios'

const fetchMenus = () => dispatch => {
  axios
    .get('http://localhost:4000/statichtmls')
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

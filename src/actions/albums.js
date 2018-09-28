export const ALBUMS_FETCHED = 'ALBUMS_FETCHED'

export const fetchAlbums = albums => dispatch => {
  // dispatch({ type: LOADING })
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(albums => {
      // dispatch({ type: DONE })
      dispatch({
        type: ALBUMS_FETCHED,
        payload: albums
      })
    })
    // .catch(error => {
    //   dispatch({ type: DONE })
    //   dispatch({ type: BACKEND_ERROR, payload: error })
    // })
}

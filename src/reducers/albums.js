import { ALBUMS_FETCHED } from '../actions/albums'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ALBUMS_FETCHED :
      return [ ...payload ]
    default :
      return state
  }
}

import { combineReducers } from 'redux';

// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'
import ToggleReducer from './reducers/ToggleReducer';

const rootReducer = combineReducers({
  showSide: ToggleReducer
})

export default rootReducer
import { combineReducers } from 'redux';
import moviesList from './movies.reducer';

const rootReducer = combineReducers({
  moviesList:moviesList
});

export default rootReducer;

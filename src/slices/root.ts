import { combineReducers } from 'redux'
import vacanciesSlice from './vacancies-slice'
import resumeSlice from './auth-slice'

const rootSlice = combineReducers({
  vacancies: vacanciesSlice,
  auth: resumeSlice
});

export default rootSlice;

import { combineReducers } from 'redux';
import Employee from './employees';

const rootReducer = combineReducers({
  Employee: Employee
});

export default rootReducer;

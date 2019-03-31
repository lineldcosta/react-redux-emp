
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../types/employees';

const initialState = {
    employees : [
      {
        empId     :'1',
        empName   :'Lionel Dcosta',
        empEmail  :'lineldcosta@gmail.com',
        empPhone  :'9535615766',
        empAddress :'Madiwala',
        empCity   :'Bangalore',
        empState  :'Karnataka',
        empZip    :'5600',
        empGender :'MALE',
      }
    ]
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  const reducer = {
    [ADD_EMPLOYEE] : () => {
      return {
        ...state,
        employees : [
          ...state.employees, payload
        ] 
      };
    },
    ['DELETE_EMPLOYEE'] : () => {
      const { payload } = action;
      const updatedState = state.employees.filter(item => item.empId !== payload);
      return {
        ...state,
        employees : [
          ...updatedState 
        ] 
      };
    },
    ['UPDATE_EMPLOYEE'] : () => {
      const {payload : { newPayload, id } } = action;
      const updatedState = state.employees.map(item => {
        if(item.empId == id){
          return {
            ...item, ...newPayload
          }
        }
        return item;
      });
      return {
        ...state,
        employees : [
          ...updatedState 
        ]
      };
      
    },
    ['DEFAULT']: () => {
      return state;
    },
  };

  return (reducer[type] || reducer['DEFAULT'])();
}

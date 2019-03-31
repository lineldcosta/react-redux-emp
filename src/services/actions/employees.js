'use strict';

import { LIST_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../types/employees';

export function addEmployee(newEmployee) {
  return {
    type: ADD_EMPLOYEE,
    payload: { ...newEmployee },
  };
}

export function updateEmployee({newPayload, id}) {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {newPayload, id},
  };
}

export function deleteEmployee(id) {
    return {
      type: DELETE_EMPLOYEE,
      payload: id,
    };
}
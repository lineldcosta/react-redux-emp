import React from 'react';
import { NavLink } from 'react-router-dom';

const List = ({ employees, deleteEmployee }) => {

    return (
        <table className="table table-hover  table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employeed Id</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              { employees.map(function(employee, key){
                   return (
                    <tr key={employee.empId}>
                        <th scope="row">{++key}</th>
                        <td>{employee.empId}</td>
                        <td>{employee.empName}</td>
                        <td>{employee.empEmail}</td>
                        <td><NavLink to={`/edit/${employee.empId}`}>Edit</NavLink>&nbsp;&nbsp;&nbsp;<a href="javascript:;" onClick={deleteEmployee(employee.empId)}>Delete</a></td>
                    </tr>
                )
              })}
          </tbody>
        </table>
    )
}

export default List;
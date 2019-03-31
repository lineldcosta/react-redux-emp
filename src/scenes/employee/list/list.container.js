import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import List from './list.component';
import { addEmployee, deleteEmployee } from './../../../services/actions/employees';

class EmployeeList extends Component {
  
  constructor(props){
    super(props);
  }

  deleteEmployee = (id) => (e) =>{
    let { dispatch } = this.props;
    dispatch(deleteEmployee(id));
  }
1
  render() {
    let { employees } = this.props;
    if(!employees && !employees.length){
      return null;
    }
    return (
      <div className="container">
        <div>
          <NavLink to="/add">Add Employee</NavLink>
        </div>
        <List employees={employees} deleteEmployee={this.deleteEmployee}/>
      </div>
    );
  }
}

function mapStatetoProps(state){
  return {
    employees : state.Employee.employees
  }
}

export default connect(mapStatetoProps)(EmployeeList);
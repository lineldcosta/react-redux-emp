import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Update from './edit.component';
import { updateEmployee } from './../../../services/actions/employees';
import '../../../assets/css/style.css';

class EmployeeList extends Component {
  
  constructor(props){
    super(props);
  }

  updateEmployee = (newPayload, id) => {
      let { dispatch } = this.props;
      dispatch(updateEmployee({newPayload, id}));
      this.props.history.push('/');
  }

  render() {

    let { employees } = this.props;
    let empId = this.props.match.params.id;
    employees = employees.filter(employee => employee.empId === empId);
    return (
      <div className="container">
        <Update employee={employees} handleSubmit={this.updateEmployee}/>
      </div>
    );
  }
}

function mapStatetoProps(state){
  return {
    employees : state.Employee.employees
  }
}

export default withRouter(connect(mapStatetoProps)(EmployeeList));
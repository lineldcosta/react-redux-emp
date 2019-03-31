import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Add from './add.component';
import { addEmployee } from './../../../services/actions/employees';
import '../../../assets/css/style.css';

class EmployeeList extends Component {
  
  constructor(props){
    super(props);
  }

  addEmployee = (payload) => {
      let { dispatch } = this.props;
      dispatch(addEmployee(payload));
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <Add handleSubmit={this.addEmployee} {...this.props}/>
      </div>
    );
  }
}

function mapStatetoProps(state){
  return {
  }
}

export default withRouter(connect(mapStatetoProps)(EmployeeList));
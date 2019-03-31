import React, { Component } from 'react';

export default class Employee extends Component {

    constructor() {
        super();
        this.state = {
          fields: {
              empId     :'',
              empName   :'',
              empEmail  :'',
              empPhone  :'',
              empAddress :'',
              empCity   :'',
              empState  :'',
              empZip    :'',
              empGender :'',
          },
          errors: {}
        }
    }
    componentDidMount(){

        let { employee } = this.props;
        if(employee && employee.length){
              this.setState({
                fields : {
                    empId     :employee[0].empId,
                    empName   :employee[0].empName,
                    empEmail  :employee[0].empEmail,
                    empPhone  :employee[0].empPhone,
                    empAddress :employee[0].empAddress,
                    empCity   :employee[0].empCity,
                    empState  :employee[0].empState,
                    empZip    :employee[0].empZip,
                    empGender :employee[0].empGender,
                }
            })
        }
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });  
    }

    submitEmployeeUpdateForm = (e) => {
        let { handleSubmit, employee} = this.props;
        e.preventDefault();
        if (this.validateForm()) {
            handleSubmit(this.state.fields, employee[0].empId);
        }
        return;  
      }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["empId"]) {
            formIsValid = false;
            errors["empId"] = "*Please enter employee Id";
        }
        if (!fields["empName"]) {
            formIsValid = false;
            errors["empName"] = "*Please enter employee Name";
        }
        if (!fields["empEmail"]) {
            formIsValid = false;
            errors["empEmail"] = "*Please enter employee Email";
        }
        if (!fields["empPhone"]) {
            formIsValid = false;
            errors["empPhone"] = "*Please enter employee Phone";
        }
        if (!fields["empZip"]) {
            formIsValid = false;
            errors["empZip"] = "*Please enter employee Zip";
        }
        if (!fields["empGender"]) {
            formIsValid = false;
            errors["empGender"] = "*Please enter employee Gender";
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
        <div id="form-container">
            <h3>Update Employee</h3>
            <form method="post"  name="employeeForm"  onSubmit= {this.submitEmployeeUpdateForm} >
            <div className="form-group">
                <label htmlFor="empId">Employee ID</label>
                <input type="text" name="empId" className="form-control"  value={this.state.fields.empId} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.empId}</div>
            </div>
            <div className="form-group">
                <label htmlFor="empName">Employee Name:</label>
                <input type="text" name="empName"  className="form-control" value={this.state.fields.empName} onChange={this.handleChange}  />
                <div className="errorMsg">{this.state.errors.empName}</div>
            </div>
            <div className="form-group">
                <label htmlFor="empEmail">Email:</label>
                <input type="text" name="empEmail"  className="form-control" value={this.state.fields.empEmail} onChange={this.handleChange}   />
                <div className="errorMsg">{this.state.errors.empEmail}</div>
            </div>
            <div className="form-group">
                <label htmlFor="empPhone">Phone No</label>
                <input type="text" name="empPhone" className="form-control" value={this.state.fields.empPhone} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.empPhone}</div>
            </div>
            <div className="form-group">
                <label htmlFor="empAddress">Address</label>
                <input type="text" name="empAddress" className="form-control" value={this.state.fields.empAddress} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="empCity">City</label>
                <input type="text" name="empCity" className="form-control" value={this.state.fields.empCity} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="empState">State</label>
                <input type="text" name="empState" className="form-control" value={this.state.fields.empState} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="empZip">Zip Code</label>
                <input type="text" name="empZip" className="form-control" value={this.state.fields.empZip} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.empZip}</div>
            </div>
            <div className="form-group">
                <label htmlFor="empGender">Gender</label>
                <input type="radio" value="MALE" name="empGender" checked={this.state.fields.empGender === "MALE"} onChange={this.handleChange} /> Male
                <input type="radio" value="FEMALE" name="empGender" checked={this.state.fields.empGender === "FEMALE"} onChange={this.handleChange}/> Female
                <div className="errorMsg">{this.state.errors.empGender}</div>
            </div>
            <input type="submit" className="button btn-success"  value="Update"/> &nbsp;&nbsp;
            <button className="button" onClick={this.back}>Cancel</button>
            </form>
    </div>
    
          );
      }
    
}

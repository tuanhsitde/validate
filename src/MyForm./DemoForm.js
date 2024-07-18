import React, { Component } from "react";
import "./UserProfile.css";
class DemoForm extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    if (value.trim() === "") {
      newErrors[name] = name + " is required";
    }
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };
  render() {
    return (
      <div className="bg-gray-200 w-full h-full fixed">
        <form className="w-6/12 h-8/12 mx-auto border-[1px] border-gray-400 bg-white mt-12">
          <h3 className="text-4xl text-bold mt-8">User Profile</h3>
          <div className="flex justify-around items-center grid-rows-1">
            <div className="group px-2">
              <input
                value={this.state.values.firstName}
                type="text"
                name="firstName"
                required
                onChange={this.handleChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
              <span className="text-red-500 text-left">
                {this.state.errors.firstName}
              </span>
            </div>
            <div className="group px-2">
              <input
                value={this.state.values.lastName}
                type="text"
                name="lastName"
                required
                onChange={this.handleChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
              <span>{this.state.values.lastName}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-around items-center grid-rows-1 mx-[1rem]">
              <div className="group w-full">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  className="w-full"
                  onChange={this.handleChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>User Name</label>
                <span>{this.state.values.userName}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around items-center grid-rows-1 mx-[1rem]">
              <div className="group w-full">
                <input
                  value={this.state.values.email}
                  type="text"
                  name="email"
                  required
                  className="w-full"
                  onChange={this.handleChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                <span>{this.state.values.email}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center grid-rows-1">
            <div className="group px-2">
              <input
                value={this.state.values.password}
                type="text"
                name="password"
                required
                onChange={this.handleChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
              <span>{this.state.values.password}</span>
            </div>
            <div className="group px-2">
              <input
                value={this.state.values.passwordConfirm}
                type="text"
                name="passwordConfirm"
                required
                onChange={this.handleChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password Confirm</label>
              <span>{this.state.values.passwordConfirm}</span>
            </div>
          </div>
          <div>
            <button className="py-2 px-8 border-[1px] border-green-400 bg-green-400 rounded-[2px] my-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DemoForm;

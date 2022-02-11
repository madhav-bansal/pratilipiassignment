import React, { Component } from "react";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        email: "",
        password: "",
      },

      formErrors: {
        email: "",
        password: "",
      },
      canSubmit: false,

      formValid: {
        email: false,
        password: false,
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    //setting formvalues
    this.setState(
      {
        formValues: {
          ...this.state.formValues,
          [name]: value,
        },
      },
      this.validate(name, value)
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  formValidate = (field, error) => {
    //sets formvalid state
    let valid = false;
    if (error === "") valid = true;

    this.setState(
      {
        formValid: {
          ...this.state.formValid,
          [field]: valid,
        },
      },
      this.canSubmit
    );
  };

  canSubmit = () => {
    //enables and disables the submit button

    let valid = true;
    let formValid = this.state.formValid;
    for (let field in formValid) {
      if (!formValid[field]) {
        valid = false;
        break;
      }
    }

    this.setState({ canSubmit: valid });
  };

  validate = (field, values) => {
    //validates the field
    let errors = "";
    let regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let regexpassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,}$/;
    switch (field) {
      case "email":
        if (!values) {
          errors = "Email is required!";
        } else if (!regexemail.test(values)) {
          errors = "This is not a valid email format!";
        } else {
          errors = "";
        }
        break;

      case "password":
        if (!values) {
          errors = "Password is required";
        } else if (values.length < 10) {
          errors = "Password must be atleast 10 characters";
        } else if (!regexpassword.test(values)) {
          errors = `password must contain :
              one upper case letter [A-Z] and
              one lower case letter [a-z]and
              one numeric character [0-9] and
              one special character.
              `;
        } else errors = "";
        break;
      default:
        break;
    }
    //sets the formerror
    this.setState(
      {
        formErrors: {
          ...this.state.formErrors,
          [field]: errors,
        },
      },
      this.formValidate(field, errors)
    );
  };

  render() {
    return (
      <div className="card">
        <div className="card-header text-white bg-primary">SignUP/Log-in</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="InputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                value={this.state.formValues.email}
                onChange={this.handleChange}
              />
              <span className="text-danger small">
                {this.state.formErrors.email}
              </span>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                
                className="form-control"
                name="password"
                id="exampleInputPassword1"
                value={this.state.formValues.password}
                onChange={this.handleChange}
              />
              <span className="text-danger small">
                {this.state.formErrors.password}
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.canSubmit ? false : true}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

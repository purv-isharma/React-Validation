import React from "react";

class SignUpForm extends React.Component {
  state = {
    userEmail: "",
    userPass: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  verificationCheck = (event) => {
    event.preventDefault();
    this.props.comparison(this.state.userEmail, this.state.userPass);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.verificationCheck}>
          <input
            value={this.state.userEmail}
            name="userEmail"
            type="email"
            placeholder="Email id"
            required
            onChange={this.handleChange}
          />
          <input
            value={this.state.userPass}
            name="userPass"
            type="password"
            placeholder="Password"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Validate ur credentials</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

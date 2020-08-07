import React from "react";
import "./styles.css";
import SignUp from "./form";
import Greet from "./Greet";

class App extends React.Component {
  state = {
    emailId: "anshulp2015@gmail.com",
    password: "12345678",
    result: ""
  };

  comparison = (userEmail, userPass) => {
    if (userEmail === this.state.emailId && userPass === this.state.password) {
      this.setState({
        result: "Welcome"
      });
    } else {
      this.setState({
        result: "Not Authorized"
      });
    }
  };
  render() {
    console.log(this.state.result);
    return (
      <div>
        <SignUp comparison={this.comparison}></SignUp>
        <Greet result={this.state.result} />
      </div>
    );
  }
}

export default App;

import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  }
  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Register</button>
    </form>
  );
}

// class LoginInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.onEmailChange = this.onEmailChange.bind(this);
//     this.onPasswordChange = this.onPasswordChange.bind(this);
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }
//   onEmailChange(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChange(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     this.props.login({
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }
//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler} className="login-input">
//         <input
//           type="email"
//           placeholder="Email"
//           value={this.state.email}
//           onChange={this.onEmailChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={this.state.password}
//           onChange={this.onPasswordChange}
//         />
//         <button>Login</button>
//       </form>
//     );
//   }
// }

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;

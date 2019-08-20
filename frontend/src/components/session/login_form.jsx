import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(updatedProps) {
    if (updatedProps.signedIn === true) {
      if (this.props.history.location.pathname !== "/feed") {
        this.props.history.push("/feed");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
        {Object.keys(this.state.errors).map((error, i) => (
          <li style={{ fontSize: "12px" }} key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-modal">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="" />
          <div>
            <br />
            <input
              className="form-text-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              className="form-text-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              className="form-signin-button"
              type="submit"
              value="Submit"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

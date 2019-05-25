import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = WrappedComponent => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {(valueFromProvider) => {
            return (
              <WrappedComponent
                login={valueFromProvider.login}
                signup={valueFromProvider.signup}
                user={valueFromProvider.user}
                logout={valueFromProvider.logout}
                isLoggedin={valueFromProvider.isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = { isLoggedin: false, user: null, isLoading: true};

  componentDidMount() {
    auth.me()
      .then(user => {
        this.setState({ isLoggedin: true, user, isLoading: false });
      })
      .catch(() => {
        this.setState({isLoggedin: false, user: null, isLoading: false});
      });
  }

  signup = user => {
    const { username, password, company } = user;
    auth
      .signup({ username, password, company })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
      });
  };

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(() => {});
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null
        });
      })
      .catch(() => {});
  };
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;

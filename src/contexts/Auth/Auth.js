import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state={
    isAuthorized: false,
    authorizeError: '',
    email: ''

  };

  authorize =  (email, pass) =>{
    if( email === `stu@dent.com` && pass === `123`){
      this.setState({
        isAuthorized: true,
        email: email,
        authorizeError: ''
      })
    }else {
      this.setState({
        authorizeError: "Email или пароль введён не верно"
      })
    }
  };
  logout = () => {
    if (this.state.isAuthorized){
      this.setState({
        isAuthorized: false,
        email: ''
      })
    }

  };

  getProviderValue = () => {
    return {...this.state, authorize:this.authorize, logout: this.logout};
  };

  render() {
    const { children } = this.props;

    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };

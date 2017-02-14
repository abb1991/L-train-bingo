class NewUser extends React.Component {
  constructor() {
    super();
    this.state={
      showSignUp: false
    }
    this.showNewUser = this.showNewUser.bind(this)
  }

  showNewUser(e){
    e.preventDefault();
    this.setState({showSignUp: !this.state.showSignUp})
  }

  login(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    $.ajax({
      url: '/users/login',
      method: 'POST',
      data: {user: {name: username, password: password}}
    }).done((response) => {
      this.props.userLoggedIn(response)
    }.bind(this))
  }

  createUser(e){
    e.preventDefault();
    var username = this.refs.newUsername.value;
    var password = this.refs.newPassword.value;
    $.ajax({
      url: '/users/new',
      method: 'POST',
      data: {newUser: {name: username, password: password}}
    }).done((response) => {
      this.props.userLoggedIn(response)
    }.bind(this))
  }

  render(){
    return(
      <div>
        <div>
            <form onSubmit={this.login.bind(this)}>
              <div className="input-group">
                <input id="email" type="text" className="form-control" name="name" ref="username" placeholder="username"/>
              </div>
              <div className="input-group">
                <input id="password" type="password" className="form-control" name="password" ref="password" placeholder="password"/>
              </div>
              <input className="btn btn-default" type="submit" value="sign in"/>
            </form>
         </div>
         <a onClick={this.showNewUser} href="/">create new account</a>
         {this.state.showSignUp ?
          <div>
            <form onSubmit={this.createUser.bind(this)}>
              <div className="input-group">
                <input id="email" type="text" className="form-control" name="name" ref="newUsername" placeholder="username"/>
              </div>
              <div className="input-group">
                <input id="password" type="password" className="form-control" name="password" ref="newPassword" placeholder="password"/>
              </div>
              <input className="btn btn-default" type="submit" value="create account"/>
            </form>
         </div>
         : null }
       </div>
      );
  }
}
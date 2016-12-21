class NewUser extends React.Component {
  constructor() {
    super();
    this.state={
      showSignUp: false
    }

  }

  signUp(e) {
    e.preventDefault();
    this.setState({showSignUp: true});
  }

  createUser(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    $.ajax({
      url: '/users/new',
      method: 'POST',
      data: {newUser: {name: username, password: password}}
    }).done((response) => {
      console.log(response)
    })
  }

  render(){
    return(
      <div>
        <a href='/' onClick={this.signUp.bind(this)}>sign up</a>
        <div>
          { this.state.showSignUp ?
            <form onSubmit={this.createUser.bind(this)}>
              <label>username:</label>
              <input type="text" name="name" ref="username"></input>
              <label>password:</label>
              <input type="password" name="password" ref="password"></input>
              <input type="submit" value="sign up"/>
            </form>
           : null}
         </div>
       </div>
      );
  }
}
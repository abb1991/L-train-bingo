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

  render(){
    return(
      <div>
        <a href='/' onClick={this.signUp.bind(this)}>sign up</a>
        <div>
          { this.state.showSignUp ?
            <form>
              <label>username:</label>
              <input type="text" name="name"></input>
              <input type="submit" value="sign up"/>
            </form>
           : null}
         </div>
       </div>
      );
  }
}
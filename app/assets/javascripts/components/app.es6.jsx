class App extends React.Component {
  constructor(props){
    super();
    this.state={
      user: props.user
    };
    this.userLoggedIn = this.userLoggedIn.bind(this)
  }

  userLoggedIn(currentUser){
    this.setState({user: currentUser})
  }



  render (){
    return (
      <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#newUser" role="tab">New User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#newBingoCard" role="tab">New Bingo Card</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bingoCard" role="tab">Game</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="newUser" className="tab-pane active" role="tabpanel">
              {this.state.user.logged_in ?
                <UserPage data={this.state.user}/>
              :
                <NewUser userLoggedIn={this.userLoggedIn}/>
              }
            </div>
            <div id="newBingoCard" className="tab-pane fade" role="tabpanel">
              <NewBingoCard />
            </div>
            <div id="bingoCard" className="tab-pane fade" role="tabpanel">
              <BingoCard/>
            </div>
          </div>
      </div>
      )
  };
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: props.user,
      friends: props.friends || [],
      cards: props.cards || [],
      games: props.games || [],
      loggedIn: props.loggedIn || false
    };
    this.userLoggedIn = this.userLoggedIn.bind(this)
    this.updateCards = this.updateCards.bind(this)
  }

  userLoggedIn(currentUser){
    this.setState({user: currentUser.user,
                   loggedIn: currentUser.loggedIn})
  }

  updateCards(response){
    this.setState({cards: response.cards,
                   games: response.games})
  }

  signOut(e){
    e.preventDefault();
    $.ajax({
      url: '/users/logout',
      method: 'get'
    })
  }


  render (){
    return (
      <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#newUser" role="tab">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bingoCard" role="tab">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#newBingoCard" role="tab">New Game</a>
            </li>
            <li className="nav-item">
              <a onClick={this.signOut} className="nav-link" href="#newBingoCard">log out</a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="newUser" className="tab-pane active" role="tabpanel">
              {this.state.loggedIn ?
                <UserPage friends={this.state.friends} data={this.state.user}/>
              :
                <NewUser userLoggedIn={this.userLoggedIn}/>
              }
            </div>
            <div id="newBingoCard" className="tab-pane fade" role="tabpanel">
              <NewBingoCard updateCards={this.updateCards}/>
            </div>
            <div id="bingoCard" className="tab-pane fade" role="tabpanel">
              <BingoCard loggedIn={this.state.loggedIn} cards={this.state.cards} games={this.state.games} />
            </div>
          </div>
      </div>
      )
  };
}


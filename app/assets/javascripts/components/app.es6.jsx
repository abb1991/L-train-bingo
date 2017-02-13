class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: props.user,
      cards: props.cards || []
    };
    this.userLoggedIn = this.userLoggedIn.bind(this)
    this.updateCards = this.updateCards.bind(this)
  }

  userLoggedIn(currentUser){
    this.setState({user: currentUser})
  }

  updateCards(response){
    this.setState({cards: response})
  }



  render (){
    return (
      <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#newUser" role="tab">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#newBingoCard" role="tab">New Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bingoCard" role="tab">Games</a>
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
              <NewBingoCard updateCards={this.updateCards}/>
            </div>
            <div id="bingoCard" className="tab-pane fade" role="tabpanel">
              <BingoCard cards={this.state.cards}/>
            </div>
          </div>
      </div>
      )
  };
}


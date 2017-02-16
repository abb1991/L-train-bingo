class BingoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show: false
    };
    this.showBoard = this.showBoard.bind(this)
  }

  showBoard(e){
    e.preventDefault();
    this.setState({show: !this.state.show})
  }

  render() {
    var self = this
    var mainGame = this.props.games[0]
    return (
      <div>
        {this.props.loggedIn ?
        <Board game={mainGame} cards={this.props.cards[mainGame.id]}/> : null }
        {this.props.loggedIn ?
        <ul className="list-group">
            {this.props.games.map(function(game){
              return (
              <li key={game.id} className="list-group-item">
                <a onClick={self.showBoard} href="/">{game.id}</a>
                <div>
                  <Board game={game} cards={self.props.cards[game.id]}/>
                </div>
              </li>
              )
            })}
          </ul> : null }
        </div>
      );
  }
}
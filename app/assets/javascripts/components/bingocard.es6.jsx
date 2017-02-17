class BingoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      show: false,
      mainGame: props.games[0] || []
    };
    this.showBoard = this.showBoard.bind(this);
    this.mainGame = this.mainGame.bind(this);
  }

  showBoard(e){
    e.preventDefault();
    this.setState({show: !this.state.show})
  }

  mainGame(e) {
      e.preventDefault();
    var gameId = e.target.getAttribute("href")
    this.props.games.map(function(g){
      if (g.id == gameId) {
          this.setState({mainGame: g});
      }
    }.bind(this));
  }

  render() {
    var self = this
    return (
      <div>
        {this.props.loggedIn ?
        <Board game={this.state.mainGame} cards={this.props.cards[this.state.mainGame.id]}/> : null }
        {this.props.loggedIn ?
        <ul className="list-group">
            {this.props.games.map(function(game){
              return (
              <li key={game.id}  className="list-group-item">
                <a onClick={self.mainGame} href={game.id}>{game.title}</a>
                <div>
                  {self.state.show ? <Board game={game} cards={self.props.cards[game.id]}/> : null}
                </div>
              </li>
              )
            })}
          </ul> : null }
        </div>
      );
  }
}
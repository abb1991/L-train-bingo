class BingoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cards: [],
      games: props.games || []
    };
  }

  render() {
    var self = this
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
          { [5,4,3,2,1].map(function(i){
            return (
              <tr key={i}>
                {self.props.cards.slice(((5 * i)-5),(5*i)).map(function(card,i) {
                  return <Card info={card} key={i} />
                  })
                }
              </tr>
              );
            })
          }
          </tbody>
        </table>
        <ul className="list-group">
            {this.props.games.map(function(game){
              return (
              <li key={game.id} className="list-group-item">
                <a href="/">{game.user_id}</a>
              </li>
              )
            })}
          </ul>
        </div>
      );
  }
}
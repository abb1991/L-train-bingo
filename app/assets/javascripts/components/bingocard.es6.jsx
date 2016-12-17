class BingoCard extends React.Component {
  constructor() {
    super();
    this.state={
      cards: [{subject: "I am a card", id: 1}, {subject: "I am a card, too", id: 2}]
    };
  }


  render() {

    var self = this

    return (
      <table>
        <tbody>
          <tr>
          {this.state.cards.map(function(card,i) {
            return <Card info={card} key={i} handleClick={self.props.handleClick}/>
          })
        }
          </tr>
        </tbody>
      </table>
      );
  }
}
class BingoCard extends React.Component {
  constructor() {
    super();
    this.state={
      cards: [{subject: "I am a card", id: 1},
      {subject: "I am a card, too", id: 2},
      {subject: "I am a card, too", id: 3},
      {subject: "I am a card, too", id: 4},
      {subject: "I am a card, too", id: 5},
      {subject: "I am a card, too", id: 6},
      {subject: "I am a card, too", id: 7},
      {subject: "I am a card, too", id: 8},
      {subject: "I am a card, too", id: 9},
      {subject: "I am a card, too", id: 10},
      {subject: "I am a card, too", id: 11},
      {subject: "I am a card, too", id: 12},
      {subject: "I am a card, too", id: 13},
      {subject: "I am a card, too", id: 14},
      {subject: "I am a card, too", id: 15},
      {subject: "I am a card, too", id: 16},
      {subject: "I am a card, too", id: 17},
      {subject: "I am a card, too", id: 18},
      {subject: "I am a card, too", id: 19},
      {subject: "I am a card, too", id: 20},
      {subject: "I am a card, too", id: 21},
      {subject: "I am a card, too", id: 22},
      {subject: "I am a card, too", id: 23},
      {subject: "I am a card, too", id: 24},
      {subject: "I am a card, too", id: 25}
      ]
    };
  }


  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
          {this.state.cards.slice(0,5).map(function(card,i) {
            return <Card info={card} key={i} />
          })
        }
          </tr>
          <tr>
          {this.state.cards.slice(5,10).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.state.cards.slice(10,15).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.state.cards.slice(15,20).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.state.cards.slice(20,25).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
        </tbody>
      </table>
      );
  }
}
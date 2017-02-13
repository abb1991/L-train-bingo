class BingoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cards: []
    };
  }

  render() {
    return (
      <table className="table-bordered">
        <tbody>
          <tr>
          {this.props.cards.slice(0,5).map(function(card,i) {
            return <Card info={card} key={i} />
          })
        }
          </tr>
          <tr>
          {this.props.cards.slice(5,10).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.props.cards.slice(10,15).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.props.cards.slice(15,20).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
          <tr>
          {this.props.cards.slice(20,25).map(function(card,i) {
            return <Card info={card} key={i}/>
          })
        }
          </tr>
        </tbody>
      </table>
      );
  }
}
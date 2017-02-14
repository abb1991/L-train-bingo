class BingoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cards: []
    };
  }

  render() {
    var self = this
    return (
      <table className="table-bordered">
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
      );
  }
}
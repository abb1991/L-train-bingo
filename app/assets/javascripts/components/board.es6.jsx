class Board extends React.Component {
  constructor(){
    super();
    this.state={

    };
  }
  render(){
    debugger;
    return(
      <div className="card">
          { this.props.game ?
            {this.props.cards.map(function(card, i) {
              return <Card info={card} key={i} />
              })
            }
          : null}
        </div>
      )
  }
}
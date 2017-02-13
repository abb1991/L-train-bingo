class NewBingoCard extends React.Component {
  constructor(){
    super();
    this.state={
      showSubmit: true,
      squares: {}
    }
    this.updateSquares = this.updateSquares.bind(this)
  }

  updateSquares(square) {
    this.state.squares[square.id] = square.card;
    var filledSquaresNum = Object.keys(this.state.squares).length;
    if(filledSquaresNum == 25) {
      this.setState({showSubmit: true});
    }
  }

  createNewCard(e) {
    e.preventDefault();
    var bingoCard = this.state.squares
    $.ajax({
      url: '/cards',
      method: 'POST',
      data: {card: {newCard: bingoCard}}
    }).done((response) => {
      this.props.updateCards(response)
    }.bind(this))
  }

  render(){
    return (
      <section>
          <form onSubmit={this.createNewCard.bind(this)} ref="entryTextarea">
            <table className="new-card">
                <tbody>
                  {[1,2,3,4,5].map(function(i){
                    return (
                   <tr key={i} >
                        {[1,2,3,4,5].map(function(j) {
                          return <NewCard onUpdateSquares={this.updateSquares} id={i.toString() + j.toString()} key={i.toString() + j.toString()} />
                        }.bind(this))
                      }
                    </tr>
                    )
                  }.bind(this))
                }
                </tbody>
            </table>
            {this.state.showSubmit ? <input className="btn btn-default" type="submit" value="create"/> : null}
          </form>
      </section>
      );
  }

}
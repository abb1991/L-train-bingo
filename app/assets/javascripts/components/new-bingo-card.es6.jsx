class NewBingoCard extends React.Component {
  constructor(){
    super();
    this.state={
      showSubmit: true,
      submitted: false,
      squares: {},
      showAddFriends: true
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
    this.setState({submitted: true,
                  showAddFriends: true})
    var bingoCard = this.state.squares
    var title = this.refs.title.value
    var cardTextAreas = document.getElementsByClassName('text-center')
    for (var i = 0; i < cardTextAreas.length; i++) {
      cardTextAreas[i].value = '';
    }
    $.ajax({
      url: '/cards',
      method: 'POST',
      data: {card: {newCard: bingoCard, title: title}}
    }).done((response) => {
      this.props.updateCards(response)
    }.bind(this))
  }

  render(){
    return (
      <section>
          <form onSubmit={this.createNewCard.bind(this)} ref="entryTextarea">
          <input className="form-control" type="text"placeholder="Game title" ref="title"/>
            <table className="new-card">
                <tbody>
                  {[1,2,3,4,5].map(function(i){
                    return (
                   <tr key={i} >
                        {[1,2,3,4,5].map(function(j) {
                          return <NewCard submitted={this.state.submitted} onUpdateSquares={this.updateSquares} id={i.toString() + j.toString()} key={i.toString() + j.toString()} />
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
          {this.state.showAddFriends ? <NewGameAddFriends /> : null}
      </section>
      );
  }

}
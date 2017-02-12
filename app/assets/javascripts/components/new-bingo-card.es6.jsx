class NewBingoCard extends React.Component {
  constructor(){
    super();
    this.state={
      showCard: false,
      showSubmit: true,
      squares: {}
    }
    this.updateSquares = this.updateSquares.bind(this)
  }

  showNewCard(e){
    e.preventDefault();
    this.setState({showCard: !this.state.showCard});

  }

  updateSquares(square) {
    this.state.squares[square.id] = square.card;
    var filledSquaresNum = Object.keys(this.state.squares).length;
    if(filledSquaresNum == 25) {
      this.setState({showSubmit: true});
    }
    console.log(this.state.squares)
  }

// extract all the user created bingo squares and send them back to the server via AJAX

  createNewCard(e) {
    e.preventDefault();
    var bingoCard = this.state.squares
    $.ajax({
      url: '/cards',
      method: 'POST',
      data: {newCard: bingoCard}
    }).done((response) => {
      console.log(response)
    })
  }

  render(){
    return (
      <section>
        <a href="/" onClick={this.showNewCard.bind(this) }>New Game</a>
        <div>{this.state.showCard ?
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
            {this.state.showSubmit ? <input className="btn btn-default" type="submit" value="submit"/> : null}
          </form>
          : null
        }
        </div>
      </section>
      );
  }

}
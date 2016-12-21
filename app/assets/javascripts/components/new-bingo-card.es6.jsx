class NewBingoCard extends React.Component {
  constructor(){
    super();
    this.state={
      showCard: false
    }
  }

  showNewCard(e){
    e.preventDefault();
    console.log(this.state.showCard)
    this.setState({showCard: true});

  }

// extract all the user creared bingo squares and send them back to the server via AJAX

  createNewCard(e) {
    // debugger;
    e.preventDefault();
    var textarea = this.refs.entryTextarea
    console.log(e)
    console.log(this)
  }

  render(){
    return (
      <section>
        <a href="/" onClick={this.showNewCard.bind(this) }>New Game</a>
        <div>{this.state.showCard ?
          <form onSubmit={this.createNewCard.bind(this)} ref="entryTextarea">
            <table>
                <tbody>
                  {[1,2,3,4,5].map(function(i){
                    return (
                   <tr key={i} >
                        {[1,2,3,4,5].map(function(j) {
                          return <NewCard id={i.toString() + j.toString()} key={i.toString() + j.toString()} />
                        })
                      }
                    </tr>
                    )
                  })
                }
                </tbody>
            </table>
            <input type="submit" value="submit"/>
          </form>
          : null
        }
        </div>
      </section>
      );
  }

}
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

  render(){
    return (
      <section>
        <a href="/" onClick={this.showNewCard.bind(this) }>New Game</a>
        <div>{this.state.showCard ?
            <table>
              <tbody>
                {[1,2,3,4,5].map(function(i){
                  return (
                 <tr key={i} >
                      {[1,2,3,4,5].map(function(i) {
                        return <NewCard key={i} />
                      })
                    }
                  </tr>
                  )
                })
              }
              </tbody>
            </table>
          : null
        }
        </div>
      </section>
      );
  }

}
class NewCard extends React.Component {
  constructor(){
    super();
    this.state={
      showCard: false
    }
    this.showNew = this.showNew.bind.this
  }

  showNew(e){
    debugger;
    e.preventDefault();
    console.log(this.state.showCard)
    this.setState({showCard: true});

  }

  render(){
    return(
      <section>
        <a href="/" onClick={this.showNew}>New Game</a>
        <div>{this.state.showCard?
                <form onClick={this.handleClick.bind(this)}>
                  <input ref="id" type="hidden" value={this.props.info.id}/>
                  <textarea placeholder="Create new bingo square..."></textarea>
                  <input className="submit-bingo-square" type='submit' value='Bingo'/>
                </form>
          : null
        }
        </div>
      </section>
      );
  }

}
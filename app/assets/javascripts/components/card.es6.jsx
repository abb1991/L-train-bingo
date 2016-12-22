class Card extends React.Component {
  constructor(props){
    super(props);
    this.state={
      complete: false,
      submitCard: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({submitCard: true});
  }

  sendCard(e) {
    debugger;
    e.preventDefault();
    this.setState({complete: !this.state.complete})
    var cardComplete = this.state.complete
    var cardId = this.props.info.id.toString()
    $.ajax({
      url: '/cards/' + cardId + '',
      method: 'PUT',
      data: {updateCard: {complete: cardComplete}}
    }).done((response) => {
      console.log(response)
    })
  }

  bingoSquare() {
    if(this.state.complete) {
      return 'bingo-true'
    } else {
      return 'bingo-false'
    };
  }

  render() {
    return (
      <td onClick={this.handleClick.bind(this)} className={this.bingoSquare()} >
        <p ref={this.props.info.id}>{this.props.info.subject}</p>
        <div>
          {this.state.submitCard ?
            <input onClick={this.sendCard.bind(this)} type="submit" value="confirm" />
          :null }
        </div>
      </td>
    );
  }
}
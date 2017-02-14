class NewCard extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }

  handleKeyUp(e) {
    var bingoCard = {card: this.refs.bingoText.value,
                  id: this.props.id}
    this.props.onUpdateSquares(bingoCard)
  }

  render(){
    return (
      <td onKeyUp={this.handleKeyUp.bind(this)}>
          <textarea className="form-control text-center" maxLength="60" rows="5" ref="bingoText"></textarea>
      </td>
    )
  }
}
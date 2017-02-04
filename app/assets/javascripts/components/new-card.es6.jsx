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
          <textarea ref="bingoText" placeholder={this.props.id} ></textarea>
      </td>
    )
  }
}
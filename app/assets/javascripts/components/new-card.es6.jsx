class NewCard extends React.Component {
  constructor(){
    super();
    this.state={
      card: "",
      id: 0
    }
  }

  handleKeyDown(e) {
    this.setState({card: this.refs.bingoText.value,
                  id: this.props.id});
    var bingoCard = this.state

    // $.ajax({
    //   url: 'game',
    //   method: 'POST',
    //   data: {data: bingoCard}
    // }).done((response) => {
    //   // updated card comes back?
    // })
  }

  render(){
    return (
      <td onKeyDown={this.handleKeyDown.bind(this)}>
          <textarea ref="bingoText" placeholder={this.props.id} ></textarea>
      </td>
    )
  }
}
class Card extends React.Component {
  constructor(props){
    super(props);
    this.state={
      complete: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    // insert pop up that confirms user's square and offers ability to upload proof
    this.setState({complete: !this.state.complete})
  }

  bingoSquare() {
    if(this.state.complete) {
      return 'bingo-true'
    } else {
      return 'bingo-false'
    };
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    var bingoSquareID = this.props.info.id;
    console.log('I work');
  }

  render() {
    return (
      <td onClick={this.handleClick.bind(this)} className={this.bingoSquare()} >
        <p ref={this.props.info.id}>{this.props.info.subject}</p>
      </td>
    );
  }
}
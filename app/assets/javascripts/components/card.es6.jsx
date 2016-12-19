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

  render() {
    return (
      <td className={this.bingoSquare()} onClick={this.handleClick.bind(this)}>
        <p ref={this.props.info.id}>{this.props.info.subject}</p>
        <p>{this.state.complete.toString()}</p>
        <form onSubmit={this.handleSubmit}>
          <input ref="id" type="hidden" value={this.props.info.id}/>
          <input className="submit-bingo-square" type='submit' value='Bingo'/><br/>
        </form>
      </td>
    );
  }
}
class Card extends React.Component {
  constructor(props){
    super(props);
    this.state={
      complete: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({complete: !this.state.complete})
  }
  render() {
    return (
      <td onClick={this.handleClick.bind(this)}>
        <p ref={this.props.info.id}>{this.props.info.subject}</p>
        <p>{this.state.complete.toString()}</p>
      </td>
    );
  }
}
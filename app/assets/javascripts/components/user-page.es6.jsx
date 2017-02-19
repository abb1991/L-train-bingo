class UserPage extends React.Component {
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <div>
        <h1>Hello, {this.props.data.name}</h1>
        <h2>Your games:</h2>
        <Friends friends={this.props.friends} />
      </div>
      )
  };
}
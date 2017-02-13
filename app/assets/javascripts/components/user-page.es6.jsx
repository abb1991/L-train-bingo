class UserPage extends React.Component {
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <div>
        <h1>Hello, {this.props.data.user.name}</h1>
        <h2>Your games:</h2>
      </div>
      )
  };
}
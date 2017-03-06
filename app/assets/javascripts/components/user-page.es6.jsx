class UserPage extends React.Component {
  constructor(props){
    super();
    this.state={
      friends: props.friends
    };
    this.addFriend = this.addFriend.bind(this)
  }

  addFriend(obj) {
    var newFriends = this.state.friends
    newFriends.push(obj.friend)
    this.setState({friends: newFriends})
  }

  render(){
    return(
      <div>
        <h1>Hello, {this.props.data.name}</h1>
        <SearchFriends addFriend={this.addFriend} />
        <h2>Your games:</h2>
        <Friends friends={this.state.friends} />
      </div>
      )
  };
}
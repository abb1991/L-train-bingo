class UserPage extends React.Component {
  constructor(props){
    super();
    this.state={
      friends: props.friends
    };
    this.addFriend = this.addFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

  addFriend(obj) {
    var newFriends = this.state.friends
    newFriends.push(obj.friend)
    this.setState({friends: newFriends})
  }

  deleteFriend(e){
    e.preventDefault();
    var id = e.target.id
    $.ajax({
      url: '/users/' + id + '',
      method: 'delete',
    }).done((response) => {
      this.setState({friends: response.friends})
    }.bind(this))
  }

  render(){
    return(
      <div>
        <h1>Hello, {this.props.data.name}</h1>
        <SearchFriends addFriend={this.addFriend} />
        <h2>Your games:</h2>
        <Friends deleteFriend={this.deleteFriend} friends={this.state.friends} />
      </div>
      )
  };
}
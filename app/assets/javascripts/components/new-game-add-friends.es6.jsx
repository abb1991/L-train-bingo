class NewGameAddFriends extends React.Component{
  constructor(){
    super();
    this.state={

    }
    this.addFriend = this.addFriend.bind(this)
  }

  addFriend(e){
    e.preventDefault();

    var name = this.refs.friend.value
    var id = this.props.id
    $.ajax({
      url: '/games/add-friend',
      method: 'PUT',
      data: {friend: name, game: id}
    }).done((response)=> {
      console.log(response)
    })
  }

  render(){
    return(
        <div>
          <form onSubmit={this.addFriend}>
            <input ref="friend" type="text" placeholder="add friends"/>
            <input type="submit" value="add" />
          </form>
        </div>
      )
  }
}
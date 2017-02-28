class SearchFriends extends React.Component {
  constructor(){
    super();
    this.state={
      searchFriend: {},
      showFriend: false
    }
    this.searchFriends = this.searchFriends.bind(this)
  }

  searchFriends(e){
    e.preventDefault();
    var input = e.target.firstChild.value
    $.ajax({
      url: '/users/find',
      method: 'POST',
      data: {user: {name: input}}
    }).done((response) => {
      this.setState({searchFriend: response.friend,
                    showFriend: true})
    }.bind(this))
  }

  inviteFriend(e) {
    e.preventDefault();
    console.log('invited')
  }
  render(){
    return(
      <div className="form-group">
      {this.state.showFriend ?
        <div>
          <h2>{this.state.searchFriend.name}</h2>
          <NewInviteFriend friend={this.state.searchFriend}inviteFriend={this.inviteFriend}/>
        </div>
        :
        <form onSubmit={this.searchFriends}>
          <input  className="form-control" placeholder="search for friends"/>
          <input type="submit" value="find friend" />
        </form>
        }
      </div>
    )
  }
}
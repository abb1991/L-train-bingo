class SearchFriends extends React.Component {
  constructor(){
    super();
    this.state={
      searchFriend: {},
      showFriend: false
    }
    this.searchFriends = this.searchFriends.bind(this)
    this.inviteFriend = this.inviteFriend.bind(this)
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
    var friend = this.state.searchFriend
    $.ajax({
      url: '/users/friend',
      method: 'POST',
      data: {user: friend}
    }).done((response) => {
      this.props.addFriend(response)
      this.setState({showFriend: false})
    })
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
          <input className="btn" type="submit" value="find friend" />
        </form>
        }
      </div>
    )
  }
}
class SearchFriends extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  searchFriends(e){
    e.preventDefault();
    var input = e.target.firstChild.value
    $.ajax({
      url: '/users/find',
      method: 'POST',
      data: {user: {name: input}}
    }).done((response) => {
      console.log(response)
    })
  }

  render(){
    return(
      <div className="form-group">
        <form onSubmit={this.searchFriends}>
          <input  className="form-control" placeholder="search for friends"/>
          <input type="submit" value="find friend" />
        </form>
      </div>
    )
  }
}
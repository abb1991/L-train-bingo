class NewGameAddFriends extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  addFriend(e){
    e.preventDefault();
    console.log("clicked")
  }

  render(){
    return(
        <div>
          <form>
            <input type="text" placeholder="add friends"/>
            <input onSubmit={this.addFriend} type="button" value="add" />
          </form>
        </div>
      )
  }
}